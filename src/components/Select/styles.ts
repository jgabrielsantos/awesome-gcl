import {
  SelectAdditionalClassesPropTypes,
  SelectBuildStylesPropTypes,
  SelectSizeComponentEnums
} from "./types";
import Sizes from './sizes'
import Themes from './themes'
import { GSizeEnum } from "../types";

interface SelectStyle {
  buildStyleRules: ({ disabled, isOpen }: SelectBuildStylesPropTypes) => Record<string, string>
}

export class SelectStyles implements SelectStyle {
  private additionalClasses: SelectAdditionalClassesPropTypes
  private sizes: Record<GSizeEnum, Record<SelectSizeComponentEnums, Map<string, string>>> = {
    large: Sizes.large(),
    medium: Sizes.medium(),
    small: Sizes.small()
  }

  constructor(additionalClasses: SelectAdditionalClassesPropTypes) {
    this.additionalClasses = additionalClasses
  }

  getSizeRules(size: GSizeEnum, component: SelectSizeComponentEnums) {
    return this.sizes[size][component]
  }

  buildStyleRules({ size, disabled, isOpen }: SelectBuildStylesPropTypes){
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
        ...Themes.inputWrapper(disabled).values(),
        ...this.getSizeRules(size, 'inputWrapper').values(),
        ...this.additionalClasses.inputWrapper
      ].join(' '),
      inputClass: [
        ...Themes.input().values(),
        ...this.getSizeRules(size, 'input').values(),
        ...this.additionalClasses.input
      ].join(' '),
      optionListClass: [
        ...Themes.optionList(isOpen).values(),
        ...this.getSizeRules(size, 'optionList').values(),
        ...this.additionalClasses.optionList
      ].join(' '),
      optionItemClass: [
        ...Themes.optionItem().values(),
        ...this.additionalClasses.optionItem
      ].join(' ')
    }

    return classes
  }
}