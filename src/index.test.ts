import { wait } from '.';
import { withApi } from './substrateApi';

jest.setTimeout(20_000);

describe('connection to node', () => {
  test('node is availible', async () => {
    await withApi(async (api) => {
      expect(api.genesisHash).toBeDefined();
      expect(api.runtimeMetadata).toBeDefined();
      expect(api.runtimeVersion).toBeDefined();
      expect(api.rpc).toBeDefined();
      expect(api.query).toBeDefined();
      expect(api.tx).toBeDefined();
      expect(api.derive).toBeDefined();
      await wait(1)
    });
  });
});
