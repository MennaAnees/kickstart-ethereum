import web3 from './web3';
import CampaignFactory from './build/CamapignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xe445ee323a67a4b9FDB433C8b56b67b5043f6C16'
);

export default instance;