'reach 0.1';

const amt = 1;


const Shared = {
  getNum: Fun([UInt], UInt),
  seeOutcome: Fun([UInt], Null),
}

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    ...Shared,
    ...hasRandom,
    // Specify Alice's interact interface here
    startRaffle: Fun([], Object({
      nftId: Token,
      numTickets: UInt,
    })),
    seeHash: Fun([Digest], Null),
  });

  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    ...Shared,
    showNum: Fun([UInt], Null),
    seeWinner: Fun([UInt], Null),
  });
  init();

  A.only(() => {
    const { nftId, numTickets } = declassify(interact.startRaffle());  
    const _winningNum = interact.getNum(numTickets);
    const [_commitA, _saltA] = makeCommitment(interact, _winningNum);
    const commitA = declassify(_commitA);
  })
  // The first one to publish deploys the contract
  A.publish(nftId, numTickets, commitA)
  A.interact.seeHash(commitA);
  commit();
  A.pay([[amt, nftId]]);
  commit();

  unknowable(B, A(_winningNum, _saltA));
  // The second one to publish always attaches

  B.only(() => {
    const myNum = declassify(interact.getNum(numTickets));
    interact.showNum(myNum);
  })

  B.publish(myNum);
  commit();

  A.only(() => {
    const saltA = declassify(_saltA);
    const winningNum = declassify(_winningNum);
  })
A.publish(saltA, winningNum);
checkCommitment(commitA, saltA, winningNum);

B.interact.seeWinner(winningNum);

const outcome = (myNum == winningNum ? 1 : 0);
transfer(amt, nftId).to(outcome == 0 ? A : B);

each([A, B], () => {
  interact.seeOutcome(outcome);
});

commit();
  // write your program here
  exit();
});
