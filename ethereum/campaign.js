import web3 from './web3';
import Campaign from './build/Camapign.json';

export default (address) => {
    return new web3.eth.Contract(
        JSON.parse(Campaign.interface),
        address
    )
};