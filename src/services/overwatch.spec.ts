import { overwatch } from './overwatch';

describe('Overwatch', () => {
  describe('getProfile', () => {
    it('should return the profile html', () => overwatch.getProfile('pc', 'Zweer-2503', 'eu')
      .then(result => expect(result).toBe('Zweer')), 20000);
  });
});
