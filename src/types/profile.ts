import * as moment from 'moment';

export type endorsement = {
  sportsmanship: number;
  shotcaller: number;
  teammate: number;
  level: number;
  frame: number;
};

export type quickplay = {
  won: number;
  time: moment.Duration;
};

export type competitive = quickplay & {
  lost: number;
  draw: number;
  played: number;
  rank: number;
  rankImage: string;
};
