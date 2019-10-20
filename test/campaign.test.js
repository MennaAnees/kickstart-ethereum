const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //constructor

//instance
//ganache.provider() the network i will communicate with
const provider = ganache.provider();
const web3 = new Web3(provider);

const compiledFactory = require('../ethereum/build/CamapignFactory.json');
const compiledCampaign = require('../ethereum/build/Camapign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;


beforeEach(async () => {
    //get list of all accounts
    //web3 is a js library to interact with ethereum network
    //to retrieve some accounts or send money
    //every func inside web3 is async

    accounts = await web3.eth.getAccounts();

    //use one of those accounts to deploy contract
    //here it is json and constructor want it an obj 
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)) //tell web3 about what methods are inside Campaign contract
        .deploy({ data: compiledFactory.bytecode }) // tell web3 we want to deploy a new copy of that contract // if there is arg: use arguments:[] is the constructor fun args!
        .send({ from: accounts[0], gas: '1000000' }) // instruct web3 to send a trx to crete a contract

    //here it is a 100 wei
    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    // take the first elm of returned array and assign it to campAddress var
    [campaignAddress] = await factory.methods.getDeployedCampaigns().call()
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    )
})


describe('Campaign', () => {
    it('deploys a factory and a campaign', () => {
        //test if address is defined
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);

    });

    it('marks caller as the campain manager', async () => {
        //methods contain all the public msgs set in our contract
        //manager() -> give it the args it requires here bs dy m4 m7taga 
        //call() --> if send trx will send obj{who will send to the trx, amount of gas} customize how this func is called and make it send() instead of call()!
        //call() no trx & no state alter
        //send() hastrx & do state alter 
        const manager = await campaign.methods.manager().call();

        assert.equal(accounts[0], manager);
    });

    it('allows people to contribute money and marks them as approvers ', async () => {
        await campaign.methods.contribute().send({
            value: '200',
            from: accounts[1]
        });

        //access mappings of approvers 
        const isContributer = await campaign.methods.approvers(accounts[1]).call();
        assert(isContributer);
    });

    it('requires a min contribution', async () => {
        try {
            await campaign.methods.contribute().send({
                value: '5',
                from: accounts[1]
            });
            assert(false)
        } catch (err) {
            assert(err)
        }
    });

    it('allows a manger to make payment request', async () => {
        await campaign.methods
            .createRequest('Buy Batteries', '100', accounts[1])
            .send({
                from: accounts[0],
                gas: '1000000'
            });

        const request = await campaign.methods.requests(0).call();
        assert.equal('Buy Batteries', request.description)
    });

    it('processes requests', async () => {
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
        });

        await campaign.methods
            .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
            .send({ from: accounts[0], gas: '1000000' })

        await campaign.methods
            .approveRequest(0)
            .send({ from: accounts[0], gas: '1000000' });

        await campaign.methods
            .finalizeRequest(0)
            .send({ from: accounts[0], gas: '1000000' });

        let balance = await web3.eth.getBalance(accounts[1]);
        balance = parseFloat(web3.utils.toWei(balance, 'ether'));

        // howa stephan 3arf eno account[1] t2reban 3ndo 7awaly 99 ether :D :D but we cannot know
        assert(balance > 103);
    })
})
