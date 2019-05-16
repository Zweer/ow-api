import * as moment from 'moment';

import { platform, region } from '../types/overwatch';
import { endorsment } from '../types/profile';

class Quickplay {
  won: number;
  time: moment.Duration;

  setTime(durationString: string) {
    const duration = moment.duration(durationString);

    if (duration.isValid()) {
      this.time = duration;
    }
  }
}

class Competitive extends Quickplay {
  lost: number;
  draw: number;
  played: number;
  rank: number;
  rankImage: string;

  get winRate() {
    return parseFloat(((this.won / this.played) * 100).toFixed(2));
  }
}

export class Profile {
  endorsment: endorsment = {} as endorsment;

  quickplay: Quickplay = new Quickplay();
  competitive: Competitive = new Competitive();

  username: string;
  tag: string;
  platform: platform;
  region: region;
  level: number;

  isPrivate: boolean;
}
