import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

console.log(`Creating the NFT...`);
const theNFT = await stdlib.launchToken(accAlice, "Mona Lisa")
const nftParams = {
  nftId: theNFT.id,
  numTickets: 10,
}

const OUTCOME = ['Your number is not a match', 'Your number matches!'];

await accBob .tokenAccept(nftParams.nftId);

const Shared = {
  getNum: (numTickets) => {
    const num = (Math.floor(Math.random() * numTickets) + 1);
    return num;
  },
  seeOutcome: (num) => {
    console.log(`The outcome is ${OUTCOME[num]}`);
  }
}

console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    ...Shared,
    startRaffle: () => {
      console.log(`The Raffle onformation is being sent to the contract`);
      return nftParams;
    },
    seeHash: (value) => {
      console.log(`The winning number HASH : ${value}`);
    },
    // implement Alice's interact object here
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    ...Shared,
    showNum: (num) => {
      console.log(`Your raffle number is ${num}`);
    },
    seeWinner: (num) => {
      console.log(`The winning number is ${num}`);
    }
    // implement Bob's interact object here
  }),
]);

console.log('Goodbye, Alice and Bob!');
