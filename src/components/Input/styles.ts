import { InputAdditionalClassesPropTypes, InputSizeComponentsEnum, InputPropTypes, InputComponentsEnum } from "./types";
import { GSizeEnum } from "../types";
import Sizes from './sizes'
import Themes from './themes'
interface InputStyle {
  getThemeRules: (component: InputComponentsEnum) => Map<string, string>
  getSizeRules: (size: GSizeEnum, component: InputSizeComponentsEnum) => Map<string, string>
  buildStyleRules: ({ size }: Pick<InputPropTypes, 'size'>) => Record<string, string>
}

export class InputStyles implements InputStyle {
  private additionalClasses: InputAdditionalClassesPropTypes
  private sizes: Record<GSizeEnum, Record<InputSizeComponentsEnum, Map<string, string>>> = {
    large: Sizes.large(),
    medium: Sizes.medium(),
    small: Sizes.small()
  }
  private themes: Record<InputComponentsEnum, Map<string, string>> = {
    wrapper: Themes.wrapper(),
    label: Themes.label(),
    inputWrapper: Themes.inputWrapper(),
    input: Themes.input(),
    passwordButton: Themes.passwordButton(),
    caption: Themes.caption()
  }

  constructor(additionalClasses: InputAdditionalClassesPropTypes) {
    this.additionalClasses = additionalClasses
  }

  getThemeRules(component: InputComponentsEnum) {
    return this.themes[component]
  }

  getSizeRules(size: GSizeEnum, component: InputSizeComponentsEnum) {
    return this.sizes[size][component]
  };

  buildStyleRules({ size }: Pick<InputPropTypes, "size">) {
    const classes = {
      wrapperClass: [
        ...this.getThemeRules('wrapper').values(),
        ...this.additionalClasses.wrapper
      ].join(' '),
      labelClass: [
        ...this.getThemeRules('label').values(),
        ...this.getSizeRules(size, 'label').values(),
        ...this.additionalClasses.label
      ].join(' '),
      inputWrapperClass: [
        ...this.getThemeRules('inputWrapper').values()
      ].join(' '),
      inputClass: [
        ...this.getThemeRules('input').values(),
        ...this.getSizeRules(size, 'input').values(),
        ...this.additionalClasses.input
      ].join(' '),
      passwordButtonClass: [
        ...this.getThemeRules('passwordButton').values(),
        ...this.getSizeRules(size, 'passwordButton').values(),
        ...this.additionalClasses.passwordButton
      ].join(' '),
      captionClass: [
        ...this.getThemeRules('caption').values(),
        ...this.getSizeRules(size, 'caption').values(),
        ...this.additionalClasses.caption
      ].join(' ')
    }
    return classes
  };
}