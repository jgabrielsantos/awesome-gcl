import { ButtonAdditionalClassesPropTypes, ButtonConstructorPropTypes, ButtonThemesEnum } from './types';
import Sizes from './sizes'
import Themes from './themes';
import { GSizeEnum } from '../../types';

/**
 * @param size          controls the font-size, line-height and padding
 * @param theme         controls the color, border and background color
 * @param disabled      controls the cursor, color, border and background color
 * @return              string with all tailwind classes to be used by the component
 * @see                 Button
*/

export interface IButtonStyle {
  buildStyleRules: () => Record<string, string>
}

export class ButtonStyles implements IButtonStyle {
  private additionalClasses: ButtonAdditionalClassesPropTypes
  private size: GSizeEnum
  private sizes: Record<GSizeEnum, Map<string, string>> = {
    large: Sizes.large(),
    medium: Sizes.medium(),
    small: Sizes.small()
  }
  private theme: ButtonThemesEnum
  private themes: Record<ButtonThemesEnum, Map<string, string>> = {
    primary: Themes.primary(),
    secondary: Themes.secondary(),
    tertiary: Themes.tertiary(),
    destructivePrimary: Themes.destructivePrimary(),
    destructiveSecondary: Themes.destructiveSecondary(),
    successPrimary: Themes.successPrimary(),
    successSecondary: Themes.successSecondary(),
    contrastPrimary: Themes.contrastPrimary(),
    contrastSecondary: Themes.contrastSecondary()
  }

  constructor({
    additionalClasses = {
      button: []
    },
    theme,
    size
  }: ButtonConstructorPropTypes) {
    this.additionalClasses = additionalClasses
    this.theme = theme
    this.size = size
  }

  private getThemeRules() {
    return this.themes[this.theme]
  }

  private getSizeRules() {
    return this.sizes[this.size]
  }

  buildStyleRules() {
    const classes = {
      buttonClass: [
        ...Themes.base().values(),
        ...this.getSizeRules().values(),
        ...this.getThemeRules().values(),
        this.additionalClasses.button
      ]. join(' ')
    }

    return classes
  }
}
