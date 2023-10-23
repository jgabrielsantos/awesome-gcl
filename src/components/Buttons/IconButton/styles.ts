import { IconButtonAdditionalClassesPropTypes, IconButtonComponentsEnum, IconButtonConstructorPropTypes, IconButtonThemesEnum } from './types';
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

export interface IIconButtonStyle {
  buildStyleRules: () => Record<`${IconButtonComponentsEnum}Class`, string>
}

export class IconButtonStyles implements IIconButtonStyle {
  private additionalClasses: IconButtonAdditionalClassesPropTypes
  private size: GSizeEnum
  private sizes: Record<GSizeEnum, Map<string, string>> = {
    large: Sizes.large(),
    medium: Sizes.medium(),
    small: Sizes.small()
  }
  private theme: IconButtonThemesEnum
  private themes: Record<IconButtonThemesEnum, Map<string, string>> = {
    primary: Themes.primary(),
    secondary: Themes.secondary(),
    tertiary: Themes.tertiary(),
    "destructivePrimary": Themes.destructivePrimary(),
    "destructiveSecondary": Themes.destructiveSecondary(),
    "successPrimary": Themes.successPrimary(),
    "successSecondary": Themes.successSecondary(),
    "contrastPrimary": Themes.contrastPrimary(),
    "contrastSecondary": Themes.contrastSecondary()
  }

  constructor({
    additionalClasses = {
      button: []
    },
    theme,
    size
  }: IconButtonConstructorPropTypes) {
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
        ...this.additionalClasses.button
      ].join(' ')
    }

    return classes
  }
}
