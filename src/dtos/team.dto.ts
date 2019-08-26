import { AccountDto } from './account.dto';
import { ColorsDto } from './colors.dto';
import { LogoDto } from './logo.dto';
import { PlayerDto } from './player.dto';

export interface TeamDto {
  id: number;
  divisionId: number;
  handle: string;
  name: string;
  abbreviatedName: string;
  logo: LogoDto;
  hasFallback: boolean;
  location: string;
  players: PlayerDto[];
  colors: ColorsDto;
  accounts: AccountDto[];
  website: string;
}
