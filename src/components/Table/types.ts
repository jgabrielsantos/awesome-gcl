import { HeaderAdditionalClasses, HeaderPropTypes } from "./Components/Headers/types"
import { DataPropTypes, RowAdditionalClassesPropTypes } from "./Components/Rows/types"


export type TableAdditionalClassesPropTypes = HeaderAdditionalClasses
& RowAdditionalClassesPropTypes
& {
  table?: string[]
  tableHead?: string[]
  headerRow?: string[]
  hiddenIconRep?: string[]
}

export type TableConstructorPropTypes = {
  additionalClasses?: TableAdditionalClassesPropTypes
}

export type TableComponentsEnum = 'table'
| 'tableHead'
| 'headerRow'
| 'hiddenIconRep'

export type TablePropTypes = {
  headers: HeaderPropTypes[]
  data: DataPropTypes[]
  onRowClick?: (row: DataPropTypes) => void
  checkedArray: DataPropTypes[]
  details?: (row: DataPropTypes) => React.ReactNode
  additionalClasses?: TableAdditionalClassesPropTypes
}

export type UseTablePropTypes = Pick<TablePropTypes, 'data'> & {
  setList: React.Dispatch<React.SetStateAction<DataPropTypes[]>>
}

export type UseHeaderCheckPropTypes = {
  headerCheck: boolean
  setHeaderCheck: React.Dispatch<React.SetStateAction<boolean>>
}
