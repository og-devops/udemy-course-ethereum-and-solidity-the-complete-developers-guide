//const HDWalletProvider = require('truffle-hdwallet-provider');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider (
  //'catalog clever firm enable cargo fashion manual wasp stadium adjust bounce glad title debris bag orange birth art enjoy sniff sword fix lazy kiss',
  'mass image enrich screen slender animal amazing follow sadness return fee that',
  'https://rinkeby.infura.io/v3/e93e48ecbf2044d38b09dd653cf6a39a'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);
///* #####Deploy script, deploy contract#####
const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });
//*/
/*
const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x' + compiledFactory.bytecode }) // add bytecode
    .send({ from: accounts[0] }); // remove gas
*/
  console.log('Contract deployed to', result.options.address);
};
deploy();
