import { TablePropTypes } from "../../types";

export type DataPropTypes = Record<string, any> & {
  details?: any
}

export type RowAdditionalClassesPropTypes = {
  row?: string[]
  dataWrapper?: string[]
  data?: string[]
  details?: string[]
  iconWrapper?: string[]
}

export type RowConstructorPropTypes = {
  additionalClasses?: RowAdditionalClassesPropTypes
  hasClickFunction: boolean
  isOpen: boolean
}

export type RowComponentsEnum = 'row'
| 'dataWrapper'
| 'data'
| 'iconWrapper'
| 'details'

export type RowPropTypes = Pick<
TablePropTypes, 'headers'
  | 'checkedArray'
  | 'onRowClick'
  | 'details'
> & {
  headerCheck: boolean
  row: DataPropTypes
  index: number
  additionalClasses?: RowAdditionalClassesPropTypes
}

export type UseRowPropTypes = Pick<RowPropTypes, 'row'
| 'index'
| 'onRowClick'
| 'headerCheck'
| 'checkedArray'
>

export type RowClickPropTypes = {
  onRowClick?: (row: DataPropTypes) => void
  row: DataPropTypes
}

export type CheckboxClickPropTypes = {
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
  checked: boolean
}