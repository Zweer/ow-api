import { AccountDto } from '../dtos/account.dto';

export class Account {
  public id: number;
  public type: string;
  public url: string;

  static factory(raw: AccountDto): Account {
    const account = new Account();

    account.id = raw.id;
    account.type = raw.type;
    account.url = raw.url;

    return account;
  }
}
