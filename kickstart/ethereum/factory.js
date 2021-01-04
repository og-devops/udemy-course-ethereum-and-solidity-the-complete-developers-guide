import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  //'0x56730E8502Fac023883a7E5ED8C8e60D866E0f05'
  '0x27087A070af72d8bEF27e7aaa842AFdA104144C1'
);

export default instance;
