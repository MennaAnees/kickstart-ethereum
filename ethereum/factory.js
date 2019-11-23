import web3 from './web3';
import CampaignFactory from './build/CamapignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x9F2Cd82926410c75b0fe12fE9B8FCfe3A3DD1DA8'
);

export default instance;