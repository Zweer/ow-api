import { PlayerDto } from '../dtos/player.dto';

import { Account } from './account';

export class Player {
  public id: number;
  public handle: string;
  public name: string;
  public fullName: string;
  public role: string;
  public accounts: Account[];
  public number: number;
  public headshot: string;
  public homeLocation: string;
  public flags: any[];

  static factory(raw: PlayerDto): Player {
    const player = new Player();

    player.id = raw.id;
    player.handle = raw.handle;
    player.name = raw.name;
    player.fullName = raw.fullName;
    player.role = raw.role;
    player.accounts = raw.accounts.map(account => Account.factory(account));
    player.number = raw.number;
    player.headshot = raw.headshot;
    player.homeLocation = raw.homeLocation;
    player.flags = raw.flags;

    return player;
  }
}
