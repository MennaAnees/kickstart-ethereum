const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CamapignFactory.json');

const provider = new HDWalletProvider(
    'parent hospital copy history leopard uncle wide town stool fragile kitchen enable',
    'https://rinkeby.infura.io/v3/c2eafcf2115442ab95149de4d940e817'

);

const web3 = new Web3(provider);

const deploy = async () => {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log("attempting to deploy from :", accounts[0]);


        const result = await new web3.eth
            .Contract(JSON.parse(compiledFactory.interface))
            .deploy({ data: '0x' +compiledFactory.bytecode })
            .send({ from: accounts[0] })


        console.log("Contract deployed to ", result.options.address);
    } catch (err) {
        console.log(err)
    }
};

deploy()