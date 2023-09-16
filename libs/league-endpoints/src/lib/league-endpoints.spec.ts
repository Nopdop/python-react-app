import { leagueEndpoints } from './league-endpoints';

describe('leagueEndpoints', () => {
  it('should work', () => {
    expect(leagueEndpoints()).toEqual('league-endpoints');
  });
});
