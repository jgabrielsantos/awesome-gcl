import Themes from "./themes";
import { TableComponentsEnum, TableConstructorPropTypes } from "./types";
interface TableStyle {
  buildStyleRules: () => Record<`${TableComponentsEnum}Class`, string>
}

export class TableStyles implements TableStyle {
  private themes: Record<TableComponentsEnum, Map<string, string>> = {
    table: Themes.table(),
    tableHead: Themes.tableHead(),
    headerRow: Themes.headerRow(),
    hiddenIconRep: Themes.hiddenIconRep()
  }
  private additionalClasses: {
    table: string[]
    tableHead: string[]
    headerRow: string[]
    hiddenIconRep: string[]
  }

  constructor({
    additionalClasses
  }: TableConstructorPropTypes) {
    this.additionalClasses = {
      table: additionalClasses?.table || [],
      tableHead: additionalClasses?.tableHead || [],
      headerRow: additionalClasses?.headerRow || [],
      hiddenIconRep: additionalClasses?.hiddenIconRep || []
    }
  }

  buildStyleRules() {
    const classes = {
      tableClass: [
        ...this.themes.table.values(),
        ...this.additionalClasses.table
      ].join(' '),
      tableHeadClass: [
        ...this.themes.tableHead.values(),
        ...this.additionalClasses.tableHead
      ].join(' '),
      headerRowClass: [
        ...this.themes.headerRow.values(),
        ...this.additionalClasses.headerRow
      ].join(' '),
      hiddenIconRepClass: [
        ...this.themes.hiddenIconRep.values(),
        ...this.additionalClasses.hiddenIconRep
      ].join(' ')
    }

    return classes
  };
}