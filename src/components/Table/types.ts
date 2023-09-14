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
  checkedArray?: DataPropTypes[]
  details?: (row: DataPropTypes) => React.ReactNode
  className?: string
}

export type UseTablePropTypes = Pick<TablePropTypes, 'data'> & {
  setList: React.Dispatch<React.SetStateAction<DataPropTypes[]>>
}

export type RowPropTypes = Pick<
TablePropTypes, 'headers'
  | 'checkedArray'
  | 'onRowClick'
  | 'details'
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