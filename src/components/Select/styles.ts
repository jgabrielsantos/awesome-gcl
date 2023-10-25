import {
  SelectComponentsEnum,
  SelectConstructorPropTypes,
  SelectSizeComponentEnums
} from "./types";
import Sizes from './sizes'
import Themes from './themes'
import { GSizeEnum } from "../types";

interface SelectStyle {
  buildStyleRules: () => Record<`${SelectComponentsEnum}Class`, string>
}

export class SelectStyles implements SelectStyle {
  private disabled: boolean
  private isOpen: boolean
  private size: GSizeEnum
  private sizes: Record<GSizeEnum, Record<SelectSizeComponentEnums, Map<string, string>>> = {
    large: Sizes.large(),
    medium: Sizes.medium(),
    small: Sizes.small()
  }
  private themes: Record<SelectComponentsEnum, Map<string, string>> = {
    wrapper: Themes.wrapper(),
    label: Themes.label(),
    inputWrapper: Themes.inputWrapper(),
    input: Themes.input(),
    optionItem: Themes.optionItem(),
    optionList: Themes.optionList()
  }
  private additionalClasses: {
    wrapper: string[],
    label: string[],
    inputWrapper: string[],
    input: string[],
    optionList: string[],
    optionItem: string[]
  }

  constructor({
    additionalClasses,
    size,
    disabled,
    isOpen
  }: SelectConstructorPropTypes) {
    this.additionalClasses = {
      wrapper: additionalClasses?.wrapper || [],
      label: additionalClasses?.label || [],
      inputWrapper: additionalClasses?.inputWrapper || [],
      input: additionalClasses?.input || [],
      optionList: additionalClasses?.optionList || [],
      optionItem: additionalClasses?.optionItem || []
    }
    this.size = size
    this.disabled = disabled || false
    this.isOpen = isOpen
  }

  private getDisabledRule(): void {
    this.themes.inputWrapper.set('cursor', this.disabled ? 'cursor-not-allowed' : 'cursor-pointer')
    this.themes.inputWrapper.set('background-color', this.disabled ? 'bg-grayscale-0' : 'bg-white-100')
  }

  private getDisplayRule(): void {
    this.themes.optionList.set('display', this.isOpen ? 'flex' : 'hidden')
  }

  private getSizeRules(component: SelectSizeComponentEnums) {
    return this.sizes[this.size][component]
  }

  buildStyleRules() {
    this.getDisabledRule()
    this.getDisplayRule()

    const classes = {
      wrapperClass: [
        ...this.themes.wrapper.values(),
        ...this.additionalClasses.wrapper
      ].join(' '),
      labelClass: [
        ...this.themes.label.values(),
        ...this.getSizeRules('label').values(),
        ...this.additionalClasses.label
      ].join(' '),
      inputWrapperClass: [
        ...this.themes.inputWrapper.values(),
        ...this.getSizeRules('inputWrapper').values(),
        ...this.additionalClasses.inputWrapper
      ].join(' '),
      inputClass: [
        ...this.themes.input.values(),
        ...this.getSizeRules('input').values(),
        ...this.additionalClasses.input
      ].join(' '),
      optionListClass: [
        ...this.themes.optionList.values(),
        ...this.getSizeRules('optionList').values(),
        ...this.additionalClasses.optionList
      ].join(' '),
      optionItemClass: [
        ...this.themes.optionItem.values(),
        ...this.additionalClasses.optionItem
      ].join(' ')
    }

    return classes
  }
}