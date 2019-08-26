import { ColorDto } from '../dtos/color.dto';
import { ColorsDto } from '../dtos/colors.dto';

class Color {
  public color: string;
  public opacity: number;

  static factory(raw: ColorDto): Color {
    const color = new Color();

    color.color = raw.color;
    color.opacity = raw.opacity;

    return color;
  }
}

export class Colors {
  public primary: Color;
  public secondary: Color;
  public tertiary: Color;

  static factory(raw: ColorsDto): Colors {
    const colors = new Colors();

    colors.primary = Color.factory(raw.primary);
    colors.secondary = Color.factory(raw.secondary);
    colors.tertiary = Color.factory(raw.tertiary);

    return colors;
  }
}
