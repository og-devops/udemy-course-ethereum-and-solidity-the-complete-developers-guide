//const HDWalletProvider = require('truffle-hdwallet-provider');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider (
  //'catalog clever firm enable cargo fashion manual wasp stadium adjust bounce glad title debris bag orange birth art enjoy sniff sword fix lazy kiss',
  'mass image enrich screen slender animal amazing follow sadness return fee that',
  'https://rinkeby.infura.io/v3/e93e48ecbf2044d38b09dd653cf6a39a'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);
///* #####Deploy script#####
  const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode })
      .send({ gas: '1000000', from: accounts[0] });
//*/
/*
  const result = await new web3.eth.Contract(JSON.parse(interface))
       .deploy({data: '0x' + bytecode, arguments: ['Hello, World!']}) // add 0x bytecode
       .send({from: accounts[0]}); // remove 'gas'
*/
/* //original code
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hello, World!'] })
    .send({ gas: '1000000', from: accounts[0] })
*/
  console.log(interface);
  console.log('Contract deployed to', result.options.address);
};
deploy();
