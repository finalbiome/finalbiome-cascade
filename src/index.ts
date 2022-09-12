import { ApiPromise, WsProvider, Keyring } from '@polkadot/api';
import { AddressOrPair, SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';

import * as dotenv from 'dotenv'
dotenv.config()

import { submitTransaction } from './substrateApi';

const keyring = new Keyring({ type: 'sr25519' });

function getWsEndpoint() {
  return process.env.WS_ENDPOINT || 'ws://127.0.0.1:9944'
}

function wait(timeout: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeout)
  })
}

function getDevAccount(name: string) {
  let account = keyring.getPairs().find(p => p.meta?.name === name)
  if (!account) {
    account = keyring.addFromUri(`//${name}`, { name });
  }
  return account
}

/**
 * Fulfill the balance to given accaunt from ALICE
 * @param name 
 */
async function fulfillBalance(api: ApiPromise, name: string) {
  const account = getDevAccount(name);
  const ALICE = getDevAccount('Alice');
  
  if (await hasBalance(api, name)) {
    return
  }
  const txTransfer = api.tx.balances.transfer(account.address, 1_000_000_000)
  await submitTransaction(ALICE, txTransfer);
}

/**
 * Generate a random user name
 * @returns 
 */
function generageNewUserName() {
  const NAME_PREFIX = 'User_';
  const name_suffix = new Date().getTime();
  const rnd_suffix = Math.random();

  return `${NAME_PREFIX}_${name_suffix}_${rnd_suffix}`
}

/**
 * 
 * @param api 
 * @param name when name is `undefined`, generate a new name
 * @returns 
 */
async function getAccountWithBalance(api: ApiPromise, name: string | undefined) {
  if (!name) {
    name = generageNewUserName()
  }
  const account = getDevAccount(name);
  await fulfillBalance(api, name);
  return account;
}

async function hasBalance(api: ApiPromise, name: string): Promise<boolean> {
  const { data: balance } = await api.query.system.account(getDevAccount(name).address);
  return !balance.free.isZero()
}

/**
 * 
 * @param api 
 * @param account 
 * @param transactions 
 * @returns 
 * @todo
 * @deprecated
 */
async function sendSignedButchTransactions(api: ApiPromise, account: AddressOrPair, transactions: SubmittableExtrinsic<"promise", ISubmittableResult>[]) {
  // TODO: for usage need to add `utility` pallet
  return new Promise<void>((resolve, reject) => {
    let unsub: () => void;
    api.tx.utility
      .batch(transactions)
      .signAndSend(account, (result) => {
        if (result.status.isInBlock) {
          unsub();
          resolve();
        } else if (result.status.isFinalized) {}
      })
      .then(us => unsub = us)
      .catch(r => reject(r));
  });
}

export {
  getWsEndpoint,
  wait,
  getDevAccount,
  getAccountWithBalance,
}
