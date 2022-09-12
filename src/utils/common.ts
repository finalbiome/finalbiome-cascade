import { EventRecord } from '@polkadot/types/interfaces/system/types';


export function filterEventByName(events: EventRecord[], section: string, method: string) {
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    if (event.event.section === section && event.event.method === method) {
      return event
    }
  }
  return undefined
}
