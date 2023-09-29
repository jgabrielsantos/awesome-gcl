import { ButtonComponentPropTypes, ButtonSizeEnum, ButtonThemeEnum } from './types';

/**
 * @param size          controls the font-size, line-height and padding
 * @param theme   controls the color, border and background color
 * @param disabled      controls the cursor, color, border and background color
 * @return              style to be used by the Button component`
 * @see                 Button
*/

export interface IButtonStyle {
  getThemeRules: (theme: ButtonThemeEnum) => Map<string, string>
  getSizeRules: (size: ButtonSizeEnum) => Map<string, string>
  buildStyleRules: ({theme, size}: Pick<ButtonComponentPropTypes, 'theme' | 'size'>) => string
}

export class ButtonStyles implements IButtonStyle {
  private className: string
  private sizes: Record<ButtonSizeEnum, Map<string, string>> = {
    large: largeSize,
    medium: mediumSize,
    small: smallSize
  }
  private themes: Record<ButtonThemeEnum, Map<string, string>> = {
    primary: primaryTheme,
    secondary: secondaryTheme,
    tertiary: tertiaryTheme,
    "destructive-primary": destructivePrimaryTheme,
    "destructive-secondary": destructiveSecondaryTheme,
    "success-primary": successPrimaryTheme,
    "success-secondary": successSecondaryTheme,
    "contrast-primary": contrastPrimaryTheme,
    "contrast-secondary": contrastSecondaryTheme
  }

  constructor(className = '') {
    this.className = className
  }

  getThemeRules(theme: ButtonThemeEnum) {
    return this.themes[theme]
  }

  getSizeRules(size: ButtonSizeEnum) {
    return this.sizes[size]
  }

  buildStyleRules({ theme, size }: Pick<ButtonComponentPropTypes, 'theme' | 'size'>) {
    const classes = [
      ...defaultRules.values(),
      ...this.getThemeRules(theme).values(),
      ...this.getSizeRules(size).values(),
    ]

    if (this.className !== '') classes.push(this.className)

    return classes.join(' ')
  }
}
