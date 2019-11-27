import web3 from './web3';
import CampaignFactory from './build/CamapignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x16cadCf5BB2092d9AfF73E9D69aA5f20F349361F' 
);

export default instance;