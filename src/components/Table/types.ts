type HeaderPropTypes = {
  id: string
  label: string
}

export type DataPropTypes = Record<string, any> & {
  details?: any
}

export type TablePropTypes = {
  headers: HeaderPropTypes[]
  data: DataPropTypes[]
  onRowClick?: (row: DataPropTypes) => void
  onRowCheckboxChange?: (row: DataPropTypes) => void
  checkbox?: boolean
  details?: (row: DataPropTypes) => React.ReactNode
  className?: string
}

export type UseTablePropTypes = Pick<TablePropTypes, 'data'> & {
  setList: React.Dispatch<React.SetStateAction<DataPropTypes[]>>
}

export type RowPropTypes = Pick<
TablePropTypes, 'headers'
  | 'checkbox'
  | 'onRowClick'
  | 'details'
  | 'onRowCheckboxChange'
> & {
  headerCheck: boolean
  row: DataPropTypes
  index: number
}

export type UseHeaderCheckPropTypes = {
  headerCheck: boolean
  setHeaderCheck: React.Dispatch<React.SetStateAction<boolean>>
}

export type RowStyledPropTypes = {
  isTableHeader?: boolean
}

export type RowMainStyledPropTypes = {
  hasClickFunction: boolean
}

export type RowDetailStyledPropTypes = {
  isOpen: boolean
}