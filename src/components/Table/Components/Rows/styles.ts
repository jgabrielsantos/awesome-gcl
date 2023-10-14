import Themes from "./themes";
import { RowAdditionalClassesPropTypes, RowStyleClassPropTypes } from "./types";

interface RowStyle {
  buildStyleRules: ({
    hasClickFunction,
    isOpen
  }: RowStyleClassPropTypes) => Record<string, string>
}

export class RowStyles implements RowStyle {
  private additionalClasses: RowAdditionalClassesPropTypes

  constructor(additionalClasses: RowAdditionalClassesPropTypes) {
    this.additionalClasses = additionalClasses
  }

  buildStyleRules({
    hasClickFunction,
    isOpen
  }: RowStyleClassPropTypes) {
    const classes = {
      rowClass: [
        ...Themes.row().values(),
        ...this.additionalClasses.row
      ].join(' '),
      dataWrapperClass: [
        ...Themes.dataWrapper(hasClickFunction).values(),
        ...this.additionalClasses.data
      ].join(' '),
      dataClass: [
        ...Themes.data().values(),
        ...this.additionalClasses.data
      ].join(' '),
      iconWrapperClass: [
        ...Themes.iconWrapper().values(),
        ...this.additionalClasses.data
      ].join(' '),
      detailsClass: [
        ...Themes.details(isOpen).values(),
        ...this.additionalClasses.data
      ].join(' ')
    }

    return classes
  }
}