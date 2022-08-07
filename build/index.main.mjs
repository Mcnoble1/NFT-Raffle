// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc3
    });
  const map0_ctc = ctc5;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc1, ctc2],
      3: [ctc0, ctc1, ctc2],
      6: [ctc0, ctc1, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Host(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Host expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Host expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    nftId: ctc3,
    numTickets: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Address;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:44:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v278, time: v277, didSend: v23, from: v276 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v278, time: v277, didSend: v23, from: v276 } = txn1;
  ;
  const v281 = stdlib.protect(ctc4, await interact.getRaffle(), {
    at: './index.rsh:51:64:application',
    fs: ['at ./index.rsh:50:12:application call to [unknown function] (defined at: ./index.rsh:50:16:function exp)'],
    msg: 'getRaffle',
    who: 'Host'
    });
  const v282 = v281.nftId;
  const v283 = v281.numTickets;
  const v286 = stdlib.protect(ctc1, await interact.getNum(v283), {
    at: './index.rsh:52:40:application',
    fs: ['at ./index.rsh:50:12:application call to [unknown function] (defined at: ./index.rsh:50:16:function exp)'],
    msg: 'getNum',
    who: 'Host'
    });
  const v287 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:53:52:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:50:12:application call to [unknown function] (defined at: ./index.rsh:50:16:function exp)'],
    msg: 'random',
    who: 'Host'
    });
  const v288 = stdlib.digest(ctc5, [v287, v286]);
  
  const txn2 = await (ctc.sendrecv({
    args: [v276, v282, v283, v288],
    evt_cnt: 3,
    funcNum: 1,
    lct: v277,
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:57:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v291, v292, v293], secs: v295, time: v294, didSend: v44, from: v290 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v291
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v291, v292, v293], secs: v295, time: v294, didSend: v44, from: v290 } = txn2;
  ;
  ;
  const v303 = stdlib.addressEq(v276, v290);
  stdlib.assert(v303, {
    at: './index.rsh:57:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Host'
    });
  stdlib.protect(ctc0, await interact.seeHash(v293), {
    at: './index.rsh:59:24:application',
    fs: ['at ./index.rsh:59:24:application call to [unknown function] (defined at: ./index.rsh:59:24:function exp)', 'at ./index.rsh:59:24:application call to "liftedInteract" (defined at: ./index.rsh:59:24:application)'],
    msg: 'seeHash',
    who: 'Host'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v276, v291, v293],
    evt_cnt: 0,
    funcNum: 2,
    lct: v294,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:61:8:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:58:15:decimal', stdlib.UInt_max, '1'), v291]]],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v307, time: v306, didSend: v55, from: v305 } = txn3;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:58:15:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v291
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v307, time: v306, didSend: v55, from: v305 } = txn3;
  ;
  ;
  const v317 = stdlib.addressEq(v276, v305);
  stdlib.assert(v317, {
    at: './index.rsh:61:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Host'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v276, v291, v293, v287, v286],
    evt_cnt: 2,
    funcNum: 3,
    lct: v306,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:71:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v324, v325], secs: v327, time: v326, didSend: v67, from: v323 } = txn4;
      
      ;
      
      const v334 = v325;
      const v335 = v276;
      const v336 = v326;
      const v343 = stdlib.checkedBigNumberify('./index.rsh:42:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v347 = stdlib.gt(v334, stdlib.checkedBigNumberify('./index.rsh:79:21:decimal', stdlib.UInt_max, '0'));
        
        return v347;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v335,
          tok: v291
          });
        sim_r.txns.push({
          kind: 'from',
          to: v276,
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v291
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc6, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v324, v325], secs: v327, time: v326, didSend: v67, from: v323 } = txn4;
  ;
  const v328 = stdlib.addressEq(v276, v323);
  stdlib.assert(v328, {
    at: './index.rsh:71:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Host'
    });
  const v329 = stdlib.digest(ctc5, [v324, v325]);
  const v330 = stdlib.digestEq(v293, v329);
  stdlib.assert(v330, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:72:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Host'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:74:22:application',
    fs: ['at ./index.rsh:74:22:application call to [unknown function] (defined at: ./index.rsh:74:22:function exp)', 'at ./index.rsh:74:22:application call to "liftedInteract" (defined at: ./index.rsh:74:22:application)'],
    msg: 'ready',
    who: 'Host'
    });
  
  let v334 = v325;
  let v335 = v276;
  let v336 = v326;
  let v343 = stdlib.checkedBigNumberify('./index.rsh:42:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v347 = stdlib.gt(v334, stdlib.checkedBigNumberify('./index.rsh:79:21:decimal', stdlib.UInt_max, '0'));
    
    return v347;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v362], secs: v364, time: v363, didSend: v185, from: v361 } = txn5;
    undefined /* setApiDetails */;
    const v366 = v362[stdlib.checkedBigNumberify('./index.rsh:80:10:spread', stdlib.UInt_max, '0')];
    const v367 = stdlib.gt(v366, stdlib.checkedBigNumberify('./index.rsh:81:22:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v367, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:81:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:80:40:application call to [unknown function] (defined at: ./index.rsh:80:40:function exp)', 'at ./index.rsh:80:40:application call to [unknown function] (defined at: ./index.rsh:80:40:function exp)'],
      msg: 'Raffle number is too low',
      who: 'Host'
      });
    const v370 = stdlib.add(v343, v366);
    ;
    await txn5.getOutput('Raffler_showRaffle', 'v366', ctc1, v366);
    stdlib.protect(ctc0, await interact.seeTicket(v361, v366), {
      at: './index.rsh:85:32:application',
      fs: ['at ./index.rsh:85:32:application call to [unknown function] (defined at: ./index.rsh:85:32:function exp)', 'at ./index.rsh:85:32:application call to "liftedInteract" (defined at: ./index.rsh:85:32:application)', 'at ./index.rsh:82:32:application call to [unknown function] (defined at: ./index.rsh:82:32:function exp)'],
      msg: 'seeTicket',
      who: 'Host'
      });
    
    const cv334 = v366;
    const cv335 = v361;
    const cv336 = v363;
    const cv343 = v370;
    
    v334 = cv334;
    v335 = cv335;
    v336 = cv336;
    v343 = cv343;
    
    continue;
    
    }
  ;
  ;
  stdlib.protect(ctc0, await interact.seeOutcome(v335, v334), {
    at: './index.rsh:93:29:application',
    fs: ['at ./index.rsh:93:29:application call to [unknown function] (defined at: ./index.rsh:93:29:function exp)', 'at ./index.rsh:93:29:application call to "liftedInteract" (defined at: ./index.rsh:93:29:application)'],
    msg: 'seeOutcome',
    who: 'Host'
    });
  
  return;
  
  
  
  
  
  
  
  
  };
export async function _Raffler_showRaffle6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Raffler_showRaffle6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Raffler_showRaffle6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v276, v291, v343] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc3, ctc4, ctc1]);
  const v350 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:80:40:application call to [unknown function] (defined at: ./index.rsh:80:40:function exp)', 'at ./index.rsh:80:40:application call to [unknown function] (defined at: ./index.rsh:80:40:function exp)'],
    msg: 'in',
    who: 'Raffler_showRaffle'
    });
  const v351 = v350[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v353 = stdlib.gt(v351, stdlib.checkedBigNumberify('./index.rsh:81:22:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v353, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:81:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:80:40:application call to [unknown function] (defined at: ./index.rsh:80:40:function exp)', 'at ./index.rsh:80:40:application call to [unknown function] (defined at: ./index.rsh:80:40:function exp)'],
    msg: 'Raffle number is too low',
    who: 'Raffler_showRaffle'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v276, v291, v343, v350],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v351, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v362], secs: v364, time: v363, didSend: v185, from: v361 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Raffler_showRaffle"
        });
      const v366 = v362[stdlib.checkedBigNumberify('./index.rsh:80:10:spread', stdlib.UInt_max, '0')];
      const v370 = stdlib.add(v343, v366);
      sim_r.txns.push({
        amt: v366,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v375 = await txn1.getOutput('Raffler_showRaffle', 'v366', ctc1, v366);
      
      const v504 = v370;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v362], secs: v364, time: v363, didSend: v185, from: v361 } = txn1;
  undefined /* setApiDetails */;
  const v366 = v362[stdlib.checkedBigNumberify('./index.rsh:80:10:spread', stdlib.UInt_max, '0')];
  const v367 = stdlib.gt(v366, stdlib.checkedBigNumberify('./index.rsh:81:22:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v367, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:81:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:80:40:application call to [unknown function] (defined at: ./index.rsh:80:40:function exp)', 'at ./index.rsh:80:40:application call to [unknown function] (defined at: ./index.rsh:80:40:function exp)'],
    msg: 'Raffle number is too low',
    who: 'Raffler_showRaffle'
    });
  const v370 = stdlib.add(v343, v366);
  ;
  const v375 = await txn1.getOutput('Raffler_showRaffle', 'v366', ctc1, v366);
  if (v185) {
    stdlib.protect(ctc0, await interact.out(v362, v375), {
      at: './index.rsh:80:11:application',
      fs: ['at ./index.rsh:80:11:application call to [unknown function] (defined at: ./index.rsh:80:11:function exp)', 'at ./index.rsh:83:15:application call to "notify" (defined at: ./index.rsh:82:32:function exp)', 'at ./index.rsh:82:32:application call to [unknown function] (defined at: ./index.rsh:82:32:function exp)'],
      msg: 'out',
      who: 'Raffler_showRaffle'
      });
    }
  else {
    }
  
  const v504 = v370;
  return;
  
  
  
  };
export async function Raffler_showRaffle(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Raffler_showRaffle expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Raffler_showRaffle expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Raffler_showRaffle6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Raffler_showRaffle(uint64)uint64`],
    pure: [],
    sigs: [`Raffler_showRaffle(uint64)uint64`]
    },
  appApproval: `BiAKAAECAwQIBSAGoI0GJgIBAAAiNQAxGEEC3ylkSSJbNQEhBVs1AjEZIxJBAAoxACiBCa9mQgKrNhoAF0lBABQiNQQjNQaBhMX4wAISRDYaAUIAJDYaAhc1BDYaAzYaARdJJAxAASZJJQxAAMtJIQYMQABlIQYSRCEINAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gARBuz19NP9QsDT/F0k1/iINRDT+iAJtgAgAAAAAAAABbjT+FlCwNP4WNQc0A1cAIDQDIQdbNP4xADIGNAOBKFs0/ghCAWIlEkQlNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BUkiWzX+IQVbNf2ABKSl8Ig0/hZQNP0WULA0/zEAEkQ0A1coIDT+FjT9FlABEkQ0/zQDIQdbNP00/zIGIkIBA0gkNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQdbNf5XKCA1/YAEQbFATbAjNP6IAcM0/zEAEkQ0/zT+FlA0/VAoSwFXAEhnSCU1ATIGNQJCATlJIwxAAHdIIzQBEkQ0BEkiEkw0AhIRRChkSTUDNf9JNQVJSSJbNf4hBVs1/VcQIDX8gASJF/7VNP4WUDT9FlA0/FCwIQmIAUKxIrIBIrISIQSyEDIKshQ0/rIRszT/MQASRDT/NP4WUDT8UChLAVcASGdIJDUBMgY1AkIAvEghCYgBByI0ARJENARJIhJMNAISEUSABF8Nq/qwMQAoSwFXACBnSCM1ATIGNQJCAIs1/zX+Nf01/DX7Nfo0/CINQQAdNPo0+xZQNP8WUChLAVcAMGdIIQg1ATIGNQJCAFuxIrIBI7ISIQSyEDT9shQ0+7IRs7EisgE0/7III7IQNPqyB7OxIrIBIrISIQSyEDIJshUyCrIUNPuyEbNCAAAxGSEGEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhBBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v291",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v292",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v293",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v324",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v325",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T13",
                "name": "v362",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v366",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Raffler_showRaffle",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v291",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v292",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v293",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v324",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v325",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T13",
                "name": "v362",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200175c3803806200175c8339810160408190526200002691620001a4565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000d4565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000cb929190620000fe565b5050506200024c565b81620000fa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010c906200020f565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600060408284031215620001b757600080fd5b604080519081016001600160401b0381118282101715620001e857634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020357600080fd5b60208201529392505050565b600181811c908216806200022457607f821691505b602082108114156200024657634e487b7160e01b600052602260045260246000fd5b50919050565b611500806200025c6000396000f3fe6080604052600436106100845760003560e01c80637eea518c116100565780637eea518c146101045780638323075714610117578063ab53f2c61461012c578063ad2d91d11461014f578063bc166b181461016257005b80630693c6621461008d5780631e93b0f1146100a057806331a4a937146100c45780633bc5b7bf146100d757005b3661008b57005b005b61008b61009b366004611025565b610175565b3480156100ac57600080fd5b506003545b6040519081526020015b60405180910390f35b6100b16100d2366004611041565b6101a0565b3480156100e357600080fd5b506100f76100f236600461106f565b6101d3565b6040516100bb91906110a2565b61008b610112366004611025565b6101ff565b34801561012357600080fd5b506001546100b1565b34801561013857600080fd5b50610141610226565b6040516100bb929190611113565b61008b61015d36600461114d565b6102c3565b61008b61017036600461115f565b6102ea565b60408051602081019091526000815261019c6101963684900384018461120a565b82610311565b5050565b60006101aa610f0c565b60208082015151849052604080519182019052600081526101cb8282610311565b519392505050565b60408051606081018252600080825260208201819052918101919091526101f982610546565b92915050565b60408051602081019091526000815261019c6102203684900384018461126f565b82610618565b60006060600054600280805461023b906112a7565b80601f0160208091040260200160405190810160405280929190818152602001828054610267906112a7565b80156102b45780601f10610289576101008083540402835291602001916102b4565b820191906000526020600020905b81548152906001019060200180831161029757829003601f168201915b50505050509050915091509091565b60408051602081019091526000815261019c6102e4368490038401846112dc565b826107ed565b60408051602081019091526000815261019c61030b36849003840184611336565b82610a1d565b6103216006600054146018610bce565b815161033c90158061033557508251600154145b6019610bce565b60008080556002805461034e906112a7565b80601f016020809104026020016040519081016040528092919081815260200182805461037a906112a7565b80156103c75780601f1061039c576101008083540402835291602001916103c7565b820191906000526020600020905b8154815290600101906020018083116103aa57829003601f168201915b50505050508060200190518101906103df91906113f2565b60408051338152855160208083019190915286015151518183015290519192507fc55e6813659179108696e4402c6ac0aad47a66a412d076c5417e97b9b278904d919081900360600190a16020830151515161043e9015156016610bce565b602083015151516104529034146017610bce565b60208381015151516040519081527f149f1d5ba79abc6b193631b2794a5eef0d46e355afbe36dd8f2a3bc01d2daa8e910160405180910390a16020830151515182526104d8604080516080808201835260008284018181526060808501839052908452845192830185528183526020838101839052948301829052820152909182015290565b815181516001600160a01b039182169052602080840151835192169181019190915284810180515151828401805191909152805133930192909252905143604091820152905151519083015161052e919061140e565b60208201516060015261054081610bf4565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156105925761059261108c565b1415610609576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156105d3576105d361108c565b60018111156105e4576105e461108c565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b610628600260005414600f610bce565b815161064390158061063c57508251600154145b6010610bce565b600080805560028054610655906112a7565b80601f0160208091040260200160405190810160405280929190818152602001828054610681906112a7565b80156106ce5780601f106106a3576101008083540402835291602001916106ce565b820191906000526020600020905b8154815290600101906020018083116106b157829003601f168201915b50505050508060200190518101906106e691906113f2565b60408051338152855160208083019190915286015115158183015290519192507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950919081900360600190a161073d3415600c610bce565b6107576107503383602001516001610cfa565b600d610bce565b805161076f906001600160a01b03163314600e610bce565b604080516060810182526000808252602080830182815283850183815286516001600160a01b0390811686528784015116909152858501519052600390915543600155915190916107c291839101611434565b604051602081830303815290604052600290805190602001906107e6929190610f3e565b5050505050565b6107fd6003600054146014610bce565b815161081890158061081157508251600154145b6015610bce565b60008080556002805461082a906112a7565b80601f0160208091040260200160405190810160405280929190818152602001828054610856906112a7565b80156108a35780601f10610878576101008083540402835291602001916108a3565b820191906000526020600020905b81548152906001019060200180831161088657829003601f168201915b50505050508060200190518101906108bb91906113f2565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634919081900360800190a161091a34156011610bce565b8051610932906001600160a01b031633146012610bce565b6020808401518051908201516040516109809361095a93929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260400151146013610bce565b6109c4604080516080808201835260008284018181526060808501839052908452845192830185528183526020838101839052948301829052820152909182015290565b815181516001600160a01b03918216905260208084015183519083169082015285810151810151818401805191909152845181519316929091019190915280514360409091015251600060609091015261054081610bf4565b610a2d600160005414600a610bce565b8151610a48901580610a4157508251600154145b600b610bce565b600080805560028054610a5a906112a7565b80601f0160208091040260200160405190810160405280929190818152602001828054610a86906112a7565b8015610ad35780601f10610aa857610100808354040283529160200191610ad3565b820191906000526020600020905b815481529060010190602001808311610ab657829003601f168201915b5050505050806020019051810190610aeb9190611463565b6040805133815285516020808301919091528087015180516001600160a01b0316838501529081015160608301529091015160808201529091507f3154d6043f71e8c078e7ab66a70e99e8c084ba24cf7e59c3091f8ec1e904ee4a9060a00160405180910390a1610b5e34156008610bce565b8051610b76906001600160a01b031633146009610bce565b604080516060810182526000808252602080830182815283850183815286516001600160a01b03908116865289840180515190911690925290518501519052600290915543600155915190916107c291839101611434565b8161019c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60208101515115610c82576040805160608082018352600080835260208084018281528486018381528751516001600160a01b0390811687528851840151169091528682015190930151909252600690554360015591519091610c5991839101611434565b60405160208183030381529060405260029080519060200190610c7d929190610f3e565b505050565b610c9e8160000151602001518260200151602001516001610d12565b8051516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610ce0573d6000803e3d6000fd5b5060008080556001819055610cf790600290610fc2565b50565b6000610d0883853085610d26565b90505b9392505050565b610d1d838383610e00565b610c7d57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610d8d91611491565b60006040518083038185875af1925050503d8060008114610dca576040519150601f19603f3d011682016040523d82523d6000602084013e610dcf565b606091505b5091509150610de082826001610ed1565b5080806020019051810190610df591906114ad565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610e5f91611491565b60006040518083038185875af1925050503d8060008114610e9c576040519150601f19603f3d011682016040523d82523d6000602084013e610ea1565b606091505b5091509150610eb282826002610ed1565b5080806020019051810190610ec791906114ad565b9695505050505050565b60608315610ee0575081610d0b565b825115610ef05782518084602001fd5b60405163100960cb60e01b815260048101839052602401610beb565b604051806040016040528060008152602001610f3960408051808201909152600060208201908152815290565b905290565b828054610f4a906112a7565b90600052602060002090601f016020900481019282610f6c5760008555610fb2565b82601f10610f8557805160ff1916838001178555610fb2565b82800160010185558215610fb2579182015b82811115610fb2578251825591602001919060010190610f97565b50610fbe929150610ff8565b5090565b508054610fce906112a7565b6000825580601f10610fde575050565b601f016020900490600052602060002090810190610cf791905b5b80821115610fbe5760008155600101610ff9565b60006040828403121561101f57600080fd5b50919050565b60006040828403121561103757600080fd5b610d0b838361100d565b60006020828403121561105357600080fd5b5035919050565b6001600160a01b0381168114610cf757600080fd5b60006020828403121561108157600080fd5b8135610d0b8161105a565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106110c757634e487b7160e01b600052602160045260246000fd5b808352506020830151151560208301526040830151604083015292915050565b60005b838110156111025781810151838201526020016110ea565b838111156105405750506000910152565b82815260406020820152600082518060408401526111388160608501602087016110e7565b601f01601f1916919091016060019392505050565b60006060828403121561101f57600080fd5b60006080828403121561101f57600080fd5b6040805190810167ffffffffffffffff811182821017156111a257634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156111a257634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156111a257634e487b7160e01b600052604160045260246000fd5b6000818303604081121561121d57600080fd5b611225611171565b833581526020601f198301121561123b57600080fd5b6112436111a8565b915061124d6111a8565b602094850135815282529283015250919050565b8015158114610cf757600080fd5b60006040828403121561128157600080fd5b611289611171565b82358152602083013561129b81611261565b60208201529392505050565b600181811c908216806112bb57607f821691505b6020821081141561101f57634e487b7160e01b600052602260045260246000fd5b600081830360608112156112ef57600080fd5b6112f7611171565b833581526040601f198301121561130d57600080fd5b611315611171565b60208581013582526040909501358582015293810193909352509092915050565b6000818303608081121561134957600080fd5b611351611171565b833581526060601f198301121561136757600080fd5b61136f6111d9565b9150602084013561137f8161105a565b8252604084810135602080850191909152606090950135908301529283015250919050565b6000606082840312156113b657600080fd5b6113be6111d9565b905081516113cb8161105a565b815260208201516113db8161105a565b806020830152506040820151604082015292915050565b60006060828403121561140457600080fd5b610d0b83836113a4565b6000821982111561142f57634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b0390811682526020808401519091169082015260408083015190820152606081016101f9565b60006020828403121561147557600080fd5b61147d6111a8565b82516114888161105a565b81529392505050565b600082516114a38184602087016110e7565b9190910192915050565b6000602082840312156114bf57600080fd5b8151610d0b8161126156fea26469706673582212206bc591758fb3ae0c2d9e6117672f24ce7c86a34fd67f9fefab217072393ab2f364736f6c634300080c0033`,
  BytecodeLen: 5980,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:47:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:60:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:63:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:95:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:77:42:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Host": Host,
  "Raffler_showRaffle": Raffler_showRaffle
  };
export const _APIs = {
  Raffler: {
    showRaffle: Raffler_showRaffle
    }
  };
