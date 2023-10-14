import Themes from "./themes";
import { TableAdditionalClassesPropTypes } from "./types";
interface TableStyle {
  buildStyleRules: () => Record<string, string>
}

export class TableStyles implements TableStyle {
  private additionalClasses: TableAdditionalClassesPropTypes

  constructor(additionalClasses: TableAdditionalClassesPropTypes) {
    this.additionalClasses = additionalClasses
  }

  buildStyleRules() {
    const classes = {
      tableClass: [
        ...Themes.table().values(),
        ...this.additionalClasses.table
      ].join(' '),
      tableHeadClass: [
        ...Themes.tableHead().values(),
        ...this.additionalClasses.tableHead
      ].join(' '),
      headerRowClass: [
        ...Themes.headerRow().values(),
        ...this.additionalClasses.headerRow
      ].join(' '),
      hiddenIconRepCLass: [
        ...Themes.hiddenIconRep().values(),
        ...this.additionalClasses.hiddenIconRep
      ].join(' ')
    }

    return classes
  };
}