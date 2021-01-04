import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  //'0x56730E8502Fac023883a7E5ED8C8e60D866E0f05'
  //'0x27087A070af72d8bEF27e7aaa842AFdA104144C1'
  //'0xCdBefbb82586D9fCd72B8AF12868716827995e21'
  //'0xDbaC5aeB7775d6DCCEf3d17e435Cc42410710f41'
  '0x05723B3b75721476D6981b87c337a9d1F836f155'
);

export default instance;
