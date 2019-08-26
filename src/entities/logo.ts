import { LogoDto } from '../dtos/logo.dto';

export class Logo {
  public main: { svg: string; png: string };
  public mainName: { svg: string; png: string };
  public altDark: { svg: string; png: string };

  static factory(raw: LogoDto): Logo {
    const logo = new Logo();

    logo.main = raw.main;
    logo.mainName = raw.mainName;
    logo.altDark = raw.altDark;

    return logo;
  }
}
