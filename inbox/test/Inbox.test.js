const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let accounts;
let inbox;


beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //Use one of those accounts to deploy
  //the content
inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ['Hello, World!']
    })
    .send({
      from: accounts[0],
      gas: '1000000'
    });

inbox.setProvider(provider);
});

describe('Inbox', () => {
  it('deploys a content', () => {
    assert.ok(inbox.options.address);
    });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hello, World!');
  });

  it('can change the message', async () => {
    await inbox.methods.setMessage('Goodbye, World!').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Goodbye, World!');
  });
});





/* ###########previous from lecture 51 3 tests
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let accounts;
let inbox;


beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //Use one of those accounts to deploy
  //the content
inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hello, World!'] })
    .send({ from: accounts[0], gas: '1000000' });

inbox.setProvider(provider);
});

describe('Inbox', () => {
  it('deploys a content', () => {
    assert.ok(inbox.options.address);
    });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hello, World!');
  });

  it('can change the message', async () => {
    await inbox.methods.setMessage('Goodbye, World!').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Goodbye, World!');
  });
});
*/

/* ###########previous from lecture 50 alternative to allow changing hello world not to break.
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let accounts;
//let inbox;
const INITIAL_STRING = 'Hello, World!'

beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //Use one of those accounts to deploy
  //the content
inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hello, World!'] })
    .send({ from: accounts[0], gas: '1000000' });

inbox.setProvider(provider);
});

describe('Inbox', () => {
  it('deploys a content', () => {
    assert.ok(inbox.options.address);
    });
  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hello, World!');
  });
});
*/

/*  ###########previous from lecture 48
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //Use one of those accounts to deploy
  //the content
inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hello, World!'] })
    .send({ from: accounts[0], gas: '1000000' });

});

describe('Inbox', () => {
  it('deploys a content', () => {
    assert.ok(inbox.options.address);
    });
});
*/

/*  ###########previous from lecture 47
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //Use one of those accounts to deploy
  //the content
inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hello, World!'] })
    .send({ from: accounts[0], gas: '1000000' });

});

describe('Inbox', () => {
  it('deploys a content', () => {
    console.log(inbox);
    });
});
*/

/*  ###########previous from lecture 45
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

let accounts;

beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //Use one of those accounts to deploy
  //the content

});

describe('Inbox', () => {
  it('deploys a content', () => {
    console.log(accounts);
  });
});

*/

/*  ###########previous from lecture 44
beforeEach(() => {
  //Get a list of all accounts
  web3.eth.getAccounts().then(fetchedAccounts => {
     console.log(fetchedAccounts);
   });


  //Use one of those accounts to deploy
  //the content

});

describe('Inbox', () => {
  it('deploys a content', () => {});
});
*/

/*
class Car {
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}

let car;

beforeEach(() => {
      car = new Car();
});

describe('Car', () => {
  it('can park', () => {
    assert.equal(car.park(), 'stopped');
  });

  it('can drive', () => {

    assert.equal(car.drive(), 'vroom');
  });
});
*/
