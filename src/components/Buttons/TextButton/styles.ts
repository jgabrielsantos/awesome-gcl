
import Sizes from './sizes'
import Themes from './themes';
import { GSizeEnum } from '../../types';
import { TextButtonAdditionalClassesPropTypes, TextButtonComponentsEnum, TextButtonConstructorPropTypes, TextButtonThemeEnum } from './types';

/**
 * @param size          controls the font-size, line-height and padding
 * @param theme         controls the color, border and background color
 * @param disabled      controls the cursor, color, border and background color
 * @return              string with all tailwind classes to be used by the component
 * @see                 Button
*/

export interface ITextButtonStyle {
  buildStyleRules: () => Record<`${TextButtonComponentsEnum}Class`, string>
}

export class TextButtonStyles implements ITextButtonStyle {
  private additionalClasses: TextButtonAdditionalClassesPropTypes
  private size: GSizeEnum
  private sizes: Record<GSizeEnum, Map<string, string>> = {
    large: Sizes.large(),
    medium: Sizes.medium(),
    small: Sizes.small()
  }
  private theme: TextButtonThemeEnum
  private themes: Record<TextButtonThemeEnum, Map<string, string>> = {
    primary: Themes.primary(),
    secondary: Themes.secondary(),
    destructive: Themes.destructive(),
    success: Themes.success(),
    contrast: Themes.contrast(),
  }

  constructor({
    additionalClasses = {
      button: []
    },
    theme,
    size
  }: TextButtonConstructorPropTypes) {
    this.additionalClasses = additionalClasses
    this.theme = theme,
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
