import web3 from './web3';
import CampaignFactory from './build/CamapignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xb213Fd515A51ca1D2B2e448162f4C9267f6076C2' 
);

export default instance;