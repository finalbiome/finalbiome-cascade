import { ApiPromise, WsProvider } from '@polkadot/api';
import { getAccountWithBalance, getDevAccount, getWsEndpoint } from '.';
import { decodeError, submitTransaction, withApi } from './substrateApi';

jest.setTimeout(20_000);

describe('Organizations', () => {
  test('create organization', async () => {
    await withApi(async (api) => {
      const user = await getAccountWithBalance(api, undefined);
      // User is not an organization
      const details = await api.query.organizationIdentity.organizations(user.address)
      expect(details.isNone).toEqual(true)
      // Create an organization
      const nameOrg = 'test org'
      const createOrg = api.tx.organizationIdentity.createOrganization(nameOrg);
      await submitTransaction(user, createOrg);
      // User is an organization
      const detailsOrg = await api.query.organizationIdentity.organizations(user.address)
      expect(detailsOrg.isSome).toEqual(true)
      expect(detailsOrg.unwrap().name.toHuman()).toEqual(nameOrg)
      expect(detailsOrg.unwrap().onboardingAssets.isNone).toEqual(true)
    })
  });

  test('create organization ungigned', async () => {
    // hide console.error "RPC-CORE: submitExtrinsic(extrinsic: Extrinsic): Hash:: 1011: Unknown Transaction Validity: NoUnsignedValidator"
    const consoleErrMock = jest.spyOn(console, 'error').mockImplementation();
    
    await withApi(async (api) => {
      const user = await getAccountWithBalance(api, undefined);
      // User is not an organization
      const details = await api.query.organizationIdentity.organizations(user.address)
      expect(details.isNone).toEqual(true)
      // Create an organization with unsigned transaction
      const nameOrg = 'test org 2'
      const createOrg = api.tx.organizationIdentity.createOrganization(nameOrg);
      expect(createOrg.send()).rejects.toBeTruthy();
      // User doesn't an organization
      const detailsOrg = await api.query.organizationIdentity.organizations(user.address)
      expect(detailsOrg.isSome).toEqual(false)
    })
    consoleErrMock.mockRestore();
  });

  test('manage members in organization', async () => {
    await withApi(async (api) => {
      const org = await getAccountWithBalance(api, undefined);
      const member = await getAccountWithBalance(api, undefined);

      // org is not an organization
      const details = await api.query.organizationIdentity.organizations(org.address)
      expect(details.isNone).toEqual(true)
      // Create an organization
      const nameOrg = 'test org'
      const createOrg = api.tx.organizationIdentity.createOrganization(nameOrg);
      await submitTransaction(org, createOrg);
      // User is an organization
      const detailsOrg = await api.query.organizationIdentity.organizations(org.address)
      expect(detailsOrg.isSome).toEqual(true)
      expect(detailsOrg.unwrap().name.toHuman()).toEqual(nameOrg)
      expect(detailsOrg.unwrap().onboardingAssets.isNone).toEqual(true)
      // add member to the org
      expect((await api.query.organizationIdentity.membersOf.keys(org.address)).length).toEqual(0);
      expect((await api.query.organizationIdentity.members(member.address)).isEmpty).toEqual(true);
      expect((await api.query.organizationIdentity.memberCount(org.address)).toNumber()).toEqual(0);

      const addMember = api.tx.organizationIdentity.addMember(member.address);
      await submitTransaction(org, addMember);
      expect((await api.query.organizationIdentity.membersOf.keys(org.address)).length).toEqual(1);
      expect((await api.query.organizationIdentity.members(member.address)).isEmpty).toEqual(false);
      expect((await api.query.organizationIdentity.memberCount(org.address)).toNumber()).toEqual(1);
      // only an org can add a member
      submitTransaction(member, api.tx.organizationIdentity.addMember(org.address))
        .then(() => expect(true).toEqual(false))
        .catch(e => expect(decodeError(api, e)).toEqual('organizationIdentity.NotOrganization'))
      // remove member from the org
      const removeMember = api.tx.organizationIdentity.removeMember(member.address);
      await submitTransaction(org, removeMember);
      expect((await api.query.organizationIdentity.membersOf.keys(org.address)).length).toEqual(0);
      expect((await api.query.organizationIdentity.members(member.address)).isEmpty).toEqual(true);
      expect((await api.query.organizationIdentity.memberCount(org.address)).toNumber()).toEqual(0);
    })
  })
});
