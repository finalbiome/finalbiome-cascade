import { EventRecord } from '@polkadot/types/interfaces/system/types';
import { filterEventByName } from './common';


export function getFungibleAssetIdFormResult(events: EventRecord[]) {
  const event = filterEventByName(events, 'fungibleAssets', 'Created')
  if (!event) throw new Error("Event 'fungibleAssets.Created' doesn't found");
  
  return parseInt((event.event.data as any)['assetId'].toString(), 10);
}
