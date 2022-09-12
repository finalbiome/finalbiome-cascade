import { getAccountWithBalance } from '.';
import { decodeError, submitTransaction, withApi } from './substrateApi';
import { createOrganizationWithMembers } from './utils/organizationHelpers';
import { getFungibleAssetIdFormResult } from './utils/faHelpers';

jest.setTimeout(20_000000);

describe('Fungible Assets', () => {
  test('Create simple FA on behalf of Member', async () => {
    await withApi(async (api) => {
      // to create an FA, we need an organization with member
      const org = await getAccountWithBalance(api, undefined);
      const member = await getAccountWithBalance(api, undefined);
      await createOrganizationWithMembers(api, org, 'org_name', [member]);
      const faName = 'A';
      const createFa = api.tx.fungibleAssets.create(org.address, faName, null, null, null);
      const events = await submitTransaction(member, createFa);
      const assetId = getFungibleAssetIdFormResult(events);
      expect(assetId).toBeGreaterThan(0);

      const details = await api.query.fungibleAssets.assets(assetId);
      expect(details.unwrap().name.toHuman()).toEqual(faName);
      expect(details.unwrap().supply.toNumber()).toEqual(0);
      expect(details.unwrap().accounts.toNumber()).toEqual(0);
      expect(details.unwrap().references.toNumber()).toEqual(0);
      expect(details.unwrap().owner.toJSON()).toEqual(org.address);
      expect(details.unwrap().topUpped.toJSON()).toEqual(null);
      expect(details.unwrap().cupGlobal.toJSON()).toEqual(null);
      expect(details.unwrap().cupLocal.toJSON()).toEqual(null);
    })
  })

  test('Create FA on behalf of Org', async () => {
    await withApi(async (api) => {
      expect.assertions(1);
      const org = await getAccountWithBalance(api, undefined);
      await createOrganizationWithMembers(api, org, 'org_name', []);
      const faName = 'A';
      const createFa = api.tx.fungibleAssets.create(org.address, faName, null, null, null);
      try {
        await submitTransaction(org, createFa)
      } catch (e) {
        expect(decodeError(api, e as any)).toEqual('BadOrigin')
      }
    })
  })

  test('Create FA on behalf of user', async () => {
    await withApi(async (api) => {
      expect.assertions(1);
      const user = await getAccountWithBalance(api, undefined);
      const faName = 'A';
      const createFa = api.tx.fungibleAssets.create(user.address, faName, null, null, null);
      try {
        await submitTransaction(user, createFa)
      } catch (e) {
        expect(decodeError(api, e as any)).toEqual('BadOrigin')
      }
    })
  })

  test('Create FA with top up',async () => {
    await withApi(async (api) => {
      const org = await getAccountWithBalance(api, undefined);
      const member = await getAccountWithBalance(api, undefined);
      await createOrganizationWithMembers(api, org, 'org_name', [member]);
      const faName = 'A';
      const topUpped = { speed: 10 };
      const cupLocal = { amount: 100 };
      const createFa = api.tx.fungibleAssets.create(org.address, faName, topUpped, null, cupLocal);
      const events = await submitTransaction(member, createFa);
      const assetId = getFungibleAssetIdFormResult(events);
      expect(assetId).toBeGreaterThan(0);

      const details = await api.query.fungibleAssets.assets(assetId);
      expect(details.unwrap().name.toHuman()).toEqual(faName);
      expect(details.unwrap().supply.toNumber()).toEqual(0);
      expect(details.unwrap().accounts.toNumber()).toEqual(0);
      expect(details.unwrap().references.toNumber()).toEqual(0);
      expect(details.unwrap().owner.toJSON()).toEqual(org.address);
      expect(details.unwrap().topUpped.toJSON()).toEqual(topUpped);
      expect(details.unwrap().cupGlobal.toJSON()).toEqual(null);
      expect(details.unwrap().cupLocal.toJSON()).toEqual(cupLocal);
    })
  })
})
