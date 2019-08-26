import { OverwatchLeague } from './overwatchLeague';

import { Team } from '../entities/team';

describe('Overwatch League', () => {
  const owl = new OverwatchLeague();

  describe('Teams', () => {
    describe('getTeams', () => {
      test('should retrieve all the teams', async () => {
        const teams = await owl.getTeams();

        expect(teams).toHaveLength(20);

        teams.forEach(team => expect(team).toBeInstanceOf(Team));
      });
    });

    describe('getTeam', () => {
      test('should retrieve an existing team', async () => {
        const team = await owl.getTeam(4523);

        expect(team).toBeDefined();
        expect(team).toBeInstanceOf(Team);
        expect(team.name).toBe('Dallas Fuel');
      });

      test('should fails with a non existing team', async () => {
        await expect(owl.getTeam(1)).rejects.toThrow('Invalid team');
      });
    });
  });
});
