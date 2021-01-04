const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
/*
const provider = ganache.provider();
const web3 = new Web3(provider);
*/

const { interface, bytecode } = require('../compile');

let lottery;
let accounts;

beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //Use one of those accounts to deploy
  //the content
lottery = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '1000000' });
});
/*
inbox.setProvider(provider);
});
*/
describe('Lottery Contract', () => {
  it('deploys a content', () => {
    assert.ok(lottery.options.address);
    });

  it('allows one account to enter', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('0.02', 'ether')
    });
    const players = await lottery.methods.getPlayers().call({
      from: accounts[0]
    });

    assert.equal(accounts[0], players[0]);
    assert.equal(1, players.length);
  });

  it('allows multiple accounts to enter', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('0.02', 'ether')
    });
    await lottery.methods.enter().send({
      from: accounts[1],
      value: web3.utils.toWei('0.02', 'ether')
    });
    await lottery.methods.enter().send({
      from: accounts[2],
      value: web3.utils.toWei('0.02', 'ether')
    });

    const players = await lottery.methods.getPlayers().call({
      from: accounts[0]
    });

    assert.equal(accounts[0], players[0]);
    assert.equal(accounts[1], players[1]);
    assert.equal(accounts[2], players[2]);
    assert.equal(3, players.length);
  });
  it('requires a minimum amount of ether to enter', async () => {
    try {
      await lottery.methods.enter().send({
        from: accounts[0],
        value: 0
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('only manager can call pickWinner', async () => {
    try {
      await lottery.methods.pickWinner().send({
        from: accounts[1],
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('sends money to the winner and resets the players array', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('2', 'ether')
    });

    const initialBalance = await web3.eth.getBalance(accounts[0]);
    await lottery.methods.pickWinner().send({ from: accounts[0] });
    const finalBalance = await web3.eth.getBalance(accounts[0]);
    const difference = finalBalance - initialBalance;
    const emptyArray = await lottery.methods.getPlayers();

    console.log(emptyArray);
    //assert(emptyArray = accounts[0]);
    console.log(finalBalance - initialBalance);
    assert(difference > web3.utils.toWei('1.8', 'ether'));

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
