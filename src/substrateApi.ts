import { ApiPromise, WsProvider } from '@polkadot/api';
import { AddressOrPair, ApiOptions, SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';
import { EventRecord } from '@polkadot/types/interfaces/system/types';
import { ExtrinsicStatus } from '@polkadot/types/interfaces/author/types';
import { KeyringPair } from '@polkadot/keyring/types';

import { getWsEndpoint, wait } from '.';

type voidPromiseFunc = () => Promise<void>;
type actionFunc = (api: ApiPromise) => Promise<void>;

function substrateApiWrapper(api: ApiPromise, action: voidPromiseFunc) {
  return new Promise<void>((resolve, reject) => {
    const err = (e: any) => {
      reject(e);
    }
    const finalize = () => {
      api.off('disconnected', err);
      api.off('error', err);
    }
    // Listen any errors
    api.on('disconnected', err);
    api.on('error', err);

    action()
      .then(resolve)
      .catch(err)
      .finally(finalize);
  })
}

function apiOptions(provider: WsProvider): ApiOptions {
  return {
    provider
  }
}

async function withApi(action: actionFunc) {
  const provider = new WsProvider(getWsEndpoint());
  const api: ApiPromise = new ApiPromise(apiOptions(provider));
  // const consoleErr = console.error;
  // console.error = () => {};
  try {
    await substrateApiWrapper(api, async () => {
      await api.isReadyOrError;
      await action(api);
    })
  } finally {
    await api.disconnect();
    await provider.disconnect();
    await wait(2000);
    // console.error = consoleErr;
  }
}

enum TxStatus {
  Success,
  Fail,
  Other,
}

function getTransactionStatus(events: EventRecord[], status: ExtrinsicStatus) {
  if (status.isReady || status.isBroadcast) {
    return TxStatus.Other;
  }
  if (status.isInBlock || status.isFinalized) {
    if(events.filter(e => e.event.data.method === 'ExtrinsicFailed').length > 0) {
      return TxStatus.Fail;
    }
    if(events.filter(e => e.event.data.method === 'ExtrinsicSuccess').length > 0) {
      return TxStatus.Success;
    }
  }
  return TxStatus.Fail;
}

function submitTransaction(account: KeyringPair, transaction: SubmittableExtrinsic<"promise", ISubmittableResult>): Promise<EventRecord[]> {
  return new Promise((resolve, reject) => {
    let unsub: () => void;
    transaction
      .signAndSend(account, { nonce: -1 }, (result) => {
        const txStatus = getTransactionStatus(result.events, result.status);
        switch (txStatus) {
          case TxStatus.Success:
            unsub();
            resolve(result.events);
            break;
          case TxStatus.Fail:
            unsub();
            reject(result.events);
            break;
          default:
            break;
        }
      })
      .then(us => unsub = us)
      .catch(r => reject(r));
  })
}

/**
 * Find first error in errors, decode it if possible
 * and returns a string representation of the error
 * @param api 
 * @param events 
 * @returns 
 */
function decodeError(api: ApiPromise, events: EventRecord[]) {
  for (let idx = 0; idx < events.length; idx++) {
    const event = events[idx].event;
    if (api.events.system.ExtrinsicFailed.is(event)) {
      const data = event.data
      const error = data[0]
      if (error.isModule) {
        const decoded = api.registry.findMetaError(error.asModule);
        const {method, section} = decoded;
        return `${section}.${method}`;
      } else {
        return error.toString();
      }
  }
  }
}

export {
  withApi,
  submitTransaction,
  decodeError,
}
