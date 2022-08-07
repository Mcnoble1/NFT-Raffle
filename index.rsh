'reach 0.1';

const MUInt = Maybe(UInt);

const [ isNum, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN ] = makeEnum(10);
const [ isOutcome, RAFFLER_WINS, RAFFLER_LOSSES ] = makeEnum(2);

const winner = (winningNum, chosenNum) => {
  if (winningNum == chosenNum) {
    return RAFFLER_WINS;
  } else {
    return RAFFLER_LOSSES;
  }
}

assert(winner(1, 1) == RAFFLER_WINS);
assert(winner(2, 2) == RAFFLER_WINS);
assert(winner(3, 3) == RAFFLER_WINS);
assert(winner(1, 2) == RAFFLER_LOSSES);
assert(winner(1, 3) == RAFFLER_LOSSES);
assert(winner(2, 1) == RAFFLER_LOSSES);

forall(UInt, winningNum => 
  forall(UInt, chosenNum => 
    assert(isOutcome(winner(winningNum, chosenNum)))));

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });

  const Host = Participant('Host', {
    ...hasRandom,
    // Specify Host's interact interface here
    getRaffle: Fun([], Object({
      nftId: Token,
      numTickets: UInt,
    })),
    seeHash: Fun([Digest], Null),
    ready: Fun([], Null),
    seeTicket: Fun([Address, UInt], Null),
    seeOutcome: Fun([Address, UInt], Null),
    getNum: Fun([UInt], UInt),
  });

  const Raffler = API('Raffler', {
    showRaffle: Fun([UInt], UInt),
    // showRaffle: Fun([UInt], Tuple(Address, UInt)),
  });
  init();

  Host.publish();

  const raffleNumber = new Map(UInt);
  commit();


  Host.only(() => {
    const { nftId, numTickets } = declassify(interact.getRaffle());  
    const _winningNum = interact.getNum(numTickets);
    const [_commitHost, _saltHost] = makeCommitment(interact, _winningNum);
    const commitHost = declassify(_commitHost);
  })
  // The first one to publish deploys the contract
  Host.publish(nftId, numTickets, commitHost)
  const amt = 1;
  Host.interact.seeHash(commitHost);
  commit();
  Host.pay([[amt, nftId]]);
  assert(balance(nftId) == amt, "balance of NFT is wrong");
  commit()

  // unknowable(Raffler, Host(_winningNum, _saltHost));

  Host.only(() => {
    const saltHost= declassify(_saltHost);
    const winningNum = declassify(_winningNum);
  })
  Host.publish(saltHost, winningNum);
  checkCommitment(commitHost, saltHost, winningNum);

  Host.interact.ready();

  const [raffleWinner, number] = parallelReduce([Host, winningNum])
    .invariant(balance(nftId) == amt)
    .while(number > 0)
    .api_(Raffler.showRaffle, (ticket) => {
      check(ticket > 0, "Raffle number is too low");
      return [ticket, (notify) => {
        notify(ticket);
        const who = this; 
        Host.interact.seeTicket(who, ticket); 
        return [who, ticket];
      }];
    })

    transfer(amt, nftId).to(raffleWinner);
    transfer(balance()).to(Host);

    Host.interact.seeOutcome(raffleWinner, number);

  commit();
  exit();
});
