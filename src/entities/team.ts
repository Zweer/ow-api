import { TeamDto } from '../dtos/team.dto';
import { TeamFullDto } from '../dtos/teamFull.dto';

import { Account } from './account';
import { Colors } from './colors';
import { Logo } from './logo';
import { Player } from './player';

export class Team {
  public id: number;
  public divisionId: number;
  public handle: string;
  public name: string;
  public abbreviatedName: string;
  public logo: Logo;
  public hasFallback: boolean;
  public location: string;
  public players: Player[];
  public colors: Colors;
  public accounts: Account[];
  public website: string;

  public placement: number;
  public advantage: number;
  public records: {
    matchWin: number;
    matchLoss: number;
    matchDraw: number;
    matchBye: number;
    gameWin: number;
    gameLoss: number;
    gameTie: number;
    gamePointsFor: number;
    gamePointsAgainst: number;

    matchWinPercentage: number;
    matchDifferential: number;
    matchGameDifferential: number;
    gameHeadToHeadDifferential: number;
    matchHeadToHeadDifferential: number;
    advantage: number;
  };

  static factory(raw: TeamDto | TeamFullDto): Team {
    const team = new Team();

    team.id = raw.id;
    team.divisionId = raw.divisionId;
    team.handle = raw.handle;
    team.name = raw.name;
    team.abbreviatedName = raw.abbreviatedName;
    team.logo = Logo.factory(raw.logo);
    team.hasFallback = raw.hasFallback;
    team.location = raw.location;
    team.players = raw.players.map(player => Player.factory(player));
    team.colors = Colors.factory(raw.colors);
    team.accounts = raw.accounts.map(account => Account.factory(account));
    team.website = raw.website;

    if (raw.hasOwnProperty('placement')) {
      const rawFull = raw as TeamFullDto;

      team.placement = rawFull.placement;
      team.advantage = rawFull.advantage;
      team.records = {
        matchWin: rawFull.records.matchWin,
        matchLoss: rawFull.records.matchLoss,
        matchDraw: rawFull.records.matchDraw,
        matchBye: rawFull.records.matchBye,
        gameWin: rawFull.records.gameWin,
        gameLoss: rawFull.records.gameLoss,
        gameTie: rawFull.records.gameTie,
        gamePointsFor: rawFull.records.gamePointsFor,
        gamePointsAgainst: rawFull.records.gamePointsAgainst,

        matchWinPercentage: rawFull.records.comparisons.find(comparison => comparison.key === 'MATCH_WIN_PERCENTAGE').value,
        matchDifferential: rawFull.records.comparisons.find(comparison => comparison.key === 'MATCH_DIFFERENTIAL').value,
        matchGameDifferential: rawFull.records.comparisons.find(comparison => comparison.key === 'MATCH_GAME_DIFFERENTIAL').value,
        gameHeadToHeadDifferential: rawFull.records.comparisons.find(comparison => comparison.key === 'GAME_HEAD_TO_HEAD_DIFFERENTIAL').value,
        matchHeadToHeadDifferential: rawFull.records.comparisons.find(comparison => comparison.key === 'MATCH_HEAD_TO_HEAD_DIFFERENTIAL').value,
        advantage: rawFull.records.comparisons.find(comparison => comparison.key === 'ADVANTAGE').value,
      };
    }

    return team;
  }
}
