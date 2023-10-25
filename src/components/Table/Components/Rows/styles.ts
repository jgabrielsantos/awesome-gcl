import Themes from "./themes";
import { RowComponentsEnum, RowConstructorPropTypes } from "./types";

interface RowStyle {
  buildStyleRules: () => Record<`${RowComponentsEnum}Class`, string>
}

export class RowStyles implements RowStyle {
  private hasClickFunction: boolean
  private isOpen: boolean
  private themes: Record<RowComponentsEnum, Map<string, string>> = {
    row: Themes.row(),
    dataWrapper: Themes.dataWrapper(),
    data: Themes.data(),
    iconWrapper: Themes.iconWrapper(),
    details: Themes.details()
  }
  private additionalClasses: {
    row: string[]
    dataWrapper: string[]
    data: string[]
    details: string[]
    iconWrapper: string[]
  }

  constructor({
    additionalClasses,
    hasClickFunction,
    isOpen
  }: RowConstructorPropTypes) {
    this.hasClickFunction = hasClickFunction
    this.isOpen = isOpen
    this.additionalClasses = {
      row: additionalClasses?.row || [],
      dataWrapper: additionalClasses?.dataWrapper || [],
      data: additionalClasses?.data || [],
      details: additionalClasses?.details || [],
      iconWrapper: additionalClasses?.iconWrapper || []
    }
  }

  private getHasClickFnRules() {
    this.themes.dataWrapper.set('cursor', this.hasClickFunction ? 'cursor-pointer' : 'cursor-default')
  }

  private getIsOpenRules() {
    this.themes.details.set('margin-top', this.isOpen ? 'mt-4' : 'mt-0')
    this.themes.details.set('max-height', this.isOpen ? 'max-h-full' : 'max-h-0')
    this.themes.details.set('padding', this.isOpen ? 'p-4' : 'p-0')
  }

  buildStyleRules() {
    this.getHasClickFnRules()
    this.getIsOpenRules()

    const classes = {
      rowClass: [
        ...this.themes.row.values(),
        ...this.additionalClasses.row
      ].join(' '),
      dataWrapperClass: [
        ...this.themes.dataWrapper.values(),
        ...this.additionalClasses.dataWrapper
      ].join(' '),
      dataClass: [
        ...this.themes.data.values(),
        ...this.additionalClasses.data
      ].join(' '),
      iconWrapperClass: [
        ...this.themes.iconWrapper.values(),
        ...this.additionalClasses.iconWrapper
      ].join(' '),
      detailsClass: [
        ...this.themes.details.values(),
        ...this.additionalClasses.details
      ].join(' ')
    }

    return classes
  }
}