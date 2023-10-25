import { InputSizeComponentsEnum, InputComponentsEnum, InputConstructorPropTypes } from "./types";
import { GSizeEnum } from "../types";
import Sizes from './sizes'
import Themes from './themes'
interface InputStyle {
  buildStyleRules: () => Record<`${InputComponentsEnum}Class`, string>
}

export class InputStyles implements InputStyle {
  private additionalClasses: {
    wrapper: string[]
    label: string[]
    inputWrapper: string[]
    input: string[]
    passwordButton: string[]
    caption: string[]
  }
  private size: GSizeEnum
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

  constructor({
    additionalClasses,
    size
  }: InputConstructorPropTypes) {
    this.additionalClasses = {
      wrapper: additionalClasses?.wrapper || [],
      label: additionalClasses?.label || [],
      inputWrapper: additionalClasses?.inputWrapper || [],
      input: additionalClasses?.input || [],
      passwordButton: additionalClasses?.passwordButton || [],
      caption: additionalClasses?.caption || [],
    }
    this.size = size
  }

  private getThemeRules(component: InputComponentsEnum) {
    return this.themes[component]
  }

  private getSizeRules(component: InputSizeComponentsEnum) {
    return this.sizes[this.size][component]
  };

  buildStyleRules() {
    const classes = {
      wrapperClass: [
        ...this.getThemeRules('wrapper').values(),
        ...this.additionalClasses.wrapper
      ].join(' '),
      labelClass: [
        ...this.getThemeRules('label').values(),
        ...this.getSizeRules('label').values(),
        ...this.additionalClasses.label
      ].join(' '),
      inputWrapperClass: [
        ...this.getThemeRules('inputWrapper').values(),
        ...this.additionalClasses.inputWrapper
      ].join(' '),
      inputClass: [
        ...this.getThemeRules('input').values(),
        ...this.getSizeRules('input').values(),
        ...this.additionalClasses.input
      ].join(' '),
      passwordButtonClass: [
        ...this.getThemeRules('passwordButton').values(),
        ...this.getSizeRules('passwordButton').values(),
        ...this.additionalClasses.passwordButton
      ].join(' '),
      captionClass: [
        ...this.getThemeRules('caption').values(),
        ...this.getSizeRules('caption').values(),
        ...this.additionalClasses.caption
      ].join(' ')
    }
    return classes
  };
}