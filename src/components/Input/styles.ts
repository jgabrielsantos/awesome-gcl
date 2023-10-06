import { InputAdditionalClassesPropTypes, InputComponentsEnum, InputPropTypes } from "./types";
import { GSizeEnum } from "../types";
import Sizes from './sizes'
import Themes from './themes'
interface InputStyle {
  buildStyleRules: ({ size }: Pick<InputPropTypes, 'size'>) => Record<string, string>
}

export class InputStyles implements InputStyle {
  private additionalClasses: InputAdditionalClassesPropTypes
  private sizes: Record<GSizeEnum, Record<InputComponentsEnum, Map<string, string>>> = {
    large: Sizes.large(),
    medium: Sizes.medium(),
    small: Sizes.small()
  }

  constructor(additionalClasses: InputAdditionalClassesPropTypes) {
    this.additionalClasses = additionalClasses
  }

  private getSizeRules(size: GSizeEnum, component: InputComponentsEnum) {
    return this.sizes[size][component]
  };

  buildStyleRules({ size }: Pick<InputPropTypes, "size">) {
    const classes = {
      wrapperClass: [
        ...Themes.wrapper().values(),
        ...this.additionalClasses.wrapper
      ].join(' '),
      labelClass: [
        ...Themes.label().values(),
        ...this.getSizeRules(size, 'label').values(),
        ...this.additionalClasses.label
      ].join(' '),
      inputWrapperClass: [
        ...Themes.inputWrapper().values()
      ].join(' '),
      inputClass: [
        ...Themes.input().values(),
        ...this.getSizeRules(size, 'input').values(),
        ...this.additionalClasses.input
      ].join(' '),
      passwordButtonClass: [
        ...Themes.passwordButton().values(),
        ...this.getSizeRules(size, 'passwordButton').values(),
        ...this.additionalClasses.passwordButton
      ].join(' '),
      captionClass: [
        ...Themes.caption().values(),
        ...this.getSizeRules(size, 'caption').values(),
        ...this.additionalClasses.caption
      ].join(' ')
    }
    return classes
  };
}