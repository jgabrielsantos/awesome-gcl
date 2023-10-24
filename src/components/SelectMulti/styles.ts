import {
  SelectMultiSizeComponentsEnum,
  SelectMultiConstructorPropTypes,
  SelectMultiComponentsEnum
} from "./types";
import { GSizeEnum } from "../types";
import Sizes from './sizes'
import Themes from './themes'

interface SelectMultiStyle {
  buildStyleRules: () => Record<`${SelectMultiComponentsEnum}Class`, string>
}

export class SelectMultiStyles implements SelectMultiStyle {
  private size: GSizeEnum
  private disabled: boolean
  private isOpen: boolean
  private themes: Record<SelectMultiComponentsEnum, Map<string, string>> = {
    wrapper: Themes.wrapper(),
    label: Themes.label(),
    input: Themes.input(),
    placeholder: Themes.placeholder(),
    selectedItem: Themes.selectedItem(),
    selectedList: Themes.selectedList(),
    optionItem: Themes.optionItem(),
    optionList: Themes.optionList(),
  }
  private sizes: Record<GSizeEnum, Record<SelectMultiSizeComponentsEnum, Map<string, string>>> = {
    large: Sizes.large(),
    medium: Sizes.medium(),
    small: Sizes.small()
  }
  private additionalClasses: {
    wrapper: string[]
    label: string[]
    input: string[]
    placeholder: string[]
    selectedItem: string[]
    selectedList: string[]
    optionItem: string[]
    optionList: string[]
  }

  constructor({
    additionalClasses,
    size,
    disabled,
    isOpen
  }: SelectMultiConstructorPropTypes) {
    this.size = size
    this.disabled = disabled || false
    this.isOpen = isOpen
    this.additionalClasses = {
      wrapper: additionalClasses?.wrapper || [],
      label: additionalClasses?.label || [],
      input: additionalClasses?.input || [],
      placeholder: additionalClasses?.placeholder || [],
      selectedItem: additionalClasses?.selectedItem || [],
      selectedList: additionalClasses?.selectedList || [],
      optionItem: additionalClasses?.optionItem || [],
      optionList: additionalClasses?.optionList || [],
    }
  }

  private getDisabledRule(): void {
    this.themes.input.set('cursor', this.disabled ? 'cursor-not-allowed' : 'cursor-pointer')
    this.themes.input.set('background-color', this.disabled ? 'bg-grayscale-0' : 'bg-white-100')
  }

  private getDisplayRule(): void {
    this.themes.optionList.set('display', this.isOpen ? 'flex' : 'hidden')
  }

  private getSizeRules(component: SelectMultiSizeComponentsEnum): Map<string, string> {
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
      inputClass: [
        ...this.themes.input.values(),
        ...this.getSizeRules('input').values(),
        ...this.additionalClasses.input
      ].join(' '),
      placeholderClass: [
        ...this.themes.placeholder.values(),
        ...this.additionalClasses.placeholder
      ].join(' '),
      selectedItemClass: [
        ...this.themes.selectedItem.values(),
        ...this.getSizeRules('selectedItem').values(),
        ...this.additionalClasses.selectedItem
      ].join(' '),
      selectedListClass: [
        ...this.themes.selectedList.values(),
        ...this.getSizeRules('selectedList').values(),
        ...this.additionalClasses.selectedList
      ].join(' '),
      optionItemClass: [
        ...this.themes.optionItem.values(),
        ...this.additionalClasses.optionItem
      ].join(' '),
      optionListClass: [
        ...this.themes.optionList.values(),
        ...this.getSizeRules('optionList').values(),
        ...this.additionalClasses.optionList
      ].join(' '),
    }

    return classes
  }
}