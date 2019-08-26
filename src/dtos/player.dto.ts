import { AccountDto } from './account.dto';

export interface PlayerDto {
  id: number;
  handle: string;
  name: string;
  fullName: string;
  role: string;
  accounts: AccountDto[];
  number: number;
  headshot: string;
  homeLocation: string;
  flags: any[];
}
