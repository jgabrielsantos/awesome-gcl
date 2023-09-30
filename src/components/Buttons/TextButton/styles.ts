import { ButtonComponentPropTypes, ButtonSizeEnum, ButtonThemeEnum } from './types';
import Sizes from './sizes'
import Themes from './themes';

/**
 * @param size          controls the font-size, line-height and padding
 * @param theme         controls the color, border and background color
 * @param disabled      controls the cursor, color, border and background color
 * @return              string with all tailwind classes to be used by the component
 * @see                 Button
*/

export interface IButtonStyle {
  getThemeRules: (theme: ButtonThemeEnum) => Map<string, string>
  getSizeRules: (size: ButtonSizeEnum) => Map<string, string>
  buildStyleRules: ({theme, size}: Pick<ButtonComponentPropTypes, 'theme' | 'size'>) => string
}

export class ButtonStyles implements IButtonStyle {
  private className: string[]
  private sizes: Record<ButtonSizeEnum, Map<string, string>> = {
    large: Sizes.largeSize,
    medium: Sizes.mediumSize,
    small: Sizes.smallSize
  }
  private themes: Record<ButtonThemeEnum, Map<string, string>> = {
    primary: Themes.primaryRules,
    secondary: Themes.secondaryRules,
    "destructive": Themes.destructiveRules,
    "success": Themes.successRules,
    "contrast": Themes.contrastRules,
  }

  constructor(className: string[]) {
    this.className = className
  }

  getThemeRules(theme: ButtonThemeEnum) {
    return this.themes[theme]
  }

  getSizeRules(size: ButtonSizeEnum) {
    return this.sizes[size]
  }

  buildStyleRules({ theme = 'primary', size = 'medium' }: Pick<ButtonComponentPropTypes, 'theme' | 'size'>) {
    const classes = [
      ...Themes.defaultRules.values(),
      ...this.getSizeRules(size).values(),
      ...this.getThemeRules(theme).values(),
      this.className.join(" ")
    ]

    return classes.join(" ")
  }
}
