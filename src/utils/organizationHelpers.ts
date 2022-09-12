import { ApiPromise } from '@polkadot/api';
import { KeyringPair } from '@polkadot/keyring/types';
import { getAccountWithBalance } from '..';
import { submitTransaction } from '../substrateApi';


/**
 * Create an organization from user with `userName` name with given `name`.  
 * If user with `userName` doesn't exist, he creates with some amount 
 * @param api 
 * @param user
 * @param name Name of the organization
 */
export async function createOrganization(api: ApiPromise, user: KeyringPair, name: string) {
  const createOrg = api.tx.organizationIdentity.createOrganization(name);
  await submitTransaction(user, createOrg);
}

/**
 * Add memeber `user` to organization `organization`
 * @param api 
 * @param organizationAddress 
 * @param userAddress 
 */
export async function addManager(api: ApiPromise, organization: KeyringPair, user: KeyringPair) {
  const addMember = api.tx.organizationIdentity.addMember(user.address);
  await submitTransaction(organization, addMember);
}

export async function createOrganizationWithMembers(api: ApiPromise, organization: KeyringPair, organizationName: string, users: KeyringPair[]) {
  await createOrganization(api, organization, organizationName);
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    await addManager(api, organization, user);
  }
}
