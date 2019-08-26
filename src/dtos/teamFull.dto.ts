import { ComparisonDto } from './comparison.dto';
import { TeamDto } from './team.dto';

export interface TeamFullDto extends TeamDto {
  placement: number;
  advantage: number;
  records: {
    matchWin: number;
    matchLoss: number;
    matchDraw: number;
    matchBye: number;
    gameWin: number;
    gameLoss: number;
    gameTie: number;
    gamePointsFor: number;
    gamePointsAgainst: number;

    comparisons: ComparisonDto[];
  };
}
