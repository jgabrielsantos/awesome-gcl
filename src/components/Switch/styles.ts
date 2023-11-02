import Sizes from './sizes'
import Themes from './themes'
import { GSizeEnum } from "../types";
import {
  SwitchComponentsEnum,
  SwitchConstructorPropTypes,
  SwitchSizeComponentsEnum
} from "./types";

interface SwitchStyle {
  buildStyleRules: () => Record<`${SwitchComponentsEnum}Class`, string>
}

export class SwitchStyles implements SwitchStyle {
  private size: GSizeEnum
  private sizes: Record<GSizeEnum, Record<SwitchSizeComponentsEnum, Map<string, string>>> = {
    large: Sizes.large(),
    medium: Sizes.medium(),
    small: Sizes.small()
  }
  private themes: Record<SwitchComponentsEnum, Map<string, string>> = {
    wrapper: Themes.wrapper(),
    label: Themes.label(),
    switchWrapper: Themes.switchWrapper(),
    input: Themes.input(),
    span: Themes.span()
  }
  private isDisabled: boolean
  private additionalClasses: {
    wrapper: string[]
    label: string[]
    switchWrapper: string[]
    input: string[]
    span: string[]
  }

  constructor({
    additionalClasses,
    size,
    disabled
  }: SwitchConstructorPropTypes) {
    this.additionalClasses = {
      wrapper: additionalClasses?.wrapper || [],
      label: additionalClasses?.label || [],
      switchWrapper: additionalClasses?.switchWrapper || [],
      input: additionalClasses?.input || [],
      span: additionalClasses?.span || []
    }
    this.size = size
    this.isDisabled = disabled || false
  }

  private getComponentSizeRules(component: SwitchSizeComponentsEnum): Map<string, string> {
    return this.sizes[this.size][component]
  }

  private applyDisabledRules() {
    if(this.isDisabled) {
      this.themes.span.set('cursor', 'cursor-not-allowed')
      this.themes.span.set('background-color', 'bg-grayscale-5')
      this.themes.span.set('before-background-color', 'bg-grayscale-60')
    }
  }

  buildStyleRules() {
    this.applyDisabledRules()

    const classes = {
      wrapperClass: [
        ...this.themes.wrapper.values(),
        ...this.getComponentSizeRules('wrapper').values(),
        ...this.additionalClasses.wrapper
      ].join(' '),
      labelClass: [
        ...this.themes.label.values(),
        ...this.getComponentSizeRules('label').values(),
        ...this.additionalClasses.label
      ].join(' '),
      switchWrapperClass: [
        ...this.themes.switchWrapper.values(),
        ...this.additionalClasses.switchWrapper
      ].join(' '),
      inputClass: [
        ...this.themes.input.values(),
        ...this.additionalClasses.input
      ].join(' '),
      spanClass: [
        ...this.themes.span.values(),
        ...this.getComponentSizeRules('span').values(),
        ...this.additionalClasses.span
      ].join(' '),
    }

    return classes
  }
}
