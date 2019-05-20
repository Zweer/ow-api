import { readFileSync } from 'fs';
import { join } from 'path';
import axios from 'axios';

import { overwatch } from './overwatch';

const profilesPath = join(__dirname, '..', '..', 'data', 'profiles');

jest.mock('axios');

describe('Overwatch', () => {
  describe('getUserInfo', () => {
    beforeAll(() => {
      const zweer = readFileSync(join(profilesPath, 'zweer.html'), 'utf8');

      // @ts-ignore
      axios.get.mockImplementation(async (url) => {
        let data;

        if (url.match('Zweer')) {
          data = zweer;
        }

        return { data };
      });
    });

    afterAll(() => jest.unmock('axios'));

    it('should return Zweer profile info', async () => {
      const { profile } = await overwatch.getUserInfo('pc', 'Zweer-2503', 'eu');

      expect(profile).toHaveProperty('isPrivate', false);
      expect(profile).toHaveProperty('level', 460);
      expect(profile).toHaveProperty('platform', 'pc');
      expect(profile).toHaveProperty('portrait', 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/dfb8175e3714225e4f364b44c13bf14bc68a77784ec86208faca02364a4438b6.png');
      expect(profile).toHaveProperty('region', 'eu');
      expect(profile).toHaveProperty('tag', 'Zweer-2503');

      expect(profile).toHaveProperty('competitive.draw', 0);
      expect(profile).toHaveProperty('competitive.lost', 13);
      expect(profile).toHaveProperty('competitive.played', 37);
      expect(profile).toHaveProperty('competitive.rank', 1900);
      expect(profile).toHaveProperty('competitive.won', 24);
      expect(profile).toHaveProperty('competitive.rankImage', 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-SilverTier.png');
      expect(profile).toHaveProperty('competitive.time');
      expect(profile.competitive.time.isValid()).toBe(true);
      expect(profile.competitive.time.asSeconds()).toBe(26017);
      expect(profile).toHaveProperty('competitive.winRate', 64.86);

      expect(profile).toHaveProperty('quickplay.won', 349);
      expect(profile).toHaveProperty('quickplay.time');
      expect(profile.quickplay.time.isValid()).toBe(true);
      expect(profile.quickplay.time.asSeconds()).toBe(315794);

      expect(profile).toHaveProperty('endorsement.frame', 'https://static.playoverwatch.com/svg/icons/endorsement-frames-fd61dee926.svg#_3');
      expect(profile).toHaveProperty('endorsement.level', 3);
      expect(profile).toHaveProperty('endorsement.shotcaller', 0.19);
      expect(profile).toHaveProperty('endorsement.sportsmanship', 0.22);
      expect(profile).toHaveProperty('endorsement.teammate', 0.6);
    });

    it('should return Zweer stats', async () => {
      const { stats } = await overwatch.getUserInfo('pc', 'Zweer-2503', 'eu');

      expect(stats).toHaveProperty('competitive.categories.assists');
      expect(stats).toHaveProperty('competitive.categories.average');
      expect(stats).toHaveProperty('competitive.categories.best');
      expect(stats).toHaveProperty('competitive.categories.combat');
      expect(stats).toHaveProperty('competitive.categories.game');
      expect(stats).toHaveProperty('competitive.categories.matchAwards');
      expect(stats).toHaveProperty('competitive.categories.miscellaneous');
      expect(stats).toHaveProperty('competitive.topHeroes.eliminationsPerLife');
      expect(stats).toHaveProperty('competitive.topHeroes.gamesWon');
      expect(stats).toHaveProperty('competitive.topHeroes.multikillBest');
      expect(stats).toHaveProperty('competitive.topHeroes.played');
      expect(stats).toHaveProperty('competitive.topHeroes.weaponAccuracy');
      expect(stats).toHaveProperty('competitive.topHeroes.winRate');

      expect(stats).toHaveProperty('quickplay.categories.assists');
      expect(stats).toHaveProperty('quickplay.categories.average');
      expect(stats).toHaveProperty('quickplay.categories.best');
      expect(stats).toHaveProperty('quickplay.categories.combat');
      expect(stats).toHaveProperty('quickplay.categories.game');
      expect(stats).toHaveProperty('quickplay.categories.matchAwards');
      expect(stats).toHaveProperty('quickplay.categories.miscellaneous');
      expect(stats).toHaveProperty('quickplay.topHeroes.eliminationsPerLife');
      expect(stats).toHaveProperty('quickplay.topHeroes.gamesWon');
      expect(stats).toHaveProperty('quickplay.topHeroes.multikillBest');
      expect(stats).toHaveProperty('quickplay.topHeroes.played');
      expect(stats).toHaveProperty('quickplay.topHeroes.weaponAccuracy');
    });
  });
});
