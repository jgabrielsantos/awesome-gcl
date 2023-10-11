import { SelectMultiAdditionalClassesPropTypes, SelectMultiComponentsEnum, SelectMultiPropTypes } from "./types";
import { GSizeEnum } from "../types";
import Sizes from './sizes'
import Themes from './themes'

type BuildStylesPropTypes = {
  disabled: boolean
  isOpen: boolean
  size: GSizeEnum
}
interface SelectStyle {
  buildStyleRules: ({ disabled, isOpen, size}: BuildStylesPropTypes) => Record<string, string>
}

export class SelectStyles implements SelectStyle {
  private additionalClasses
  private sizes: Record<GSizeEnum, Record<SelectMultiComponentsEnum, Map<string, string>>> = {
    large: Sizes.large(),
    medium: Sizes.medium(),
    small: Sizes.small()
  }

  constructor(additionalClasses: SelectMultiAdditionalClassesPropTypes) {
    this.additionalClasses = additionalClasses
  }

  private getSizeRules(size: GSizeEnum, component: SelectMultiComponentsEnum) {
    return this.sizes[size][component]
  }

  buildStyleRules({ disabled, isOpen, size }: BuildStylesPropTypes) {
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
      inputClass: [
        ...Themes.input(disabled).values(),
        ...this.getSizeRules(size, 'input').values(),
        ...this.additionalClasses.input
      ].join(' '),
      placeholderClass: [
        ...Themes.placeholder().values(),
        ...this.additionalClasses.placeholder
      ].join(' '),
      selectedItemClass: [
        ...Themes.selectedItem().values(),
        ...this.getSizeRules(size, 'selectedItem').values(),
        ...this.additionalClasses.selectedItem
      ].join(' '),
      selectedListClass: [
        ...Themes.selectedList().values(),
        ...this.getSizeRules(size, 'selectedList').values(),
        ...this.additionalClasses.selectedList
      ].join(' '),
      optionItemClass: [
        ...Themes.optionItem().values(),
        ...this.additionalClasses.optionItem
      ].join(' '),
      optionListClass: [
        ...Themes.optionList(isOpen).values(),
        ...this.getSizeRules(size, 'optionList').values(),
        ...this.additionalClasses.optionList
      ].join(' '),
    }

    return classes
  }
}