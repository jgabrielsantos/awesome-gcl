type HeaderPropTypes = {
  id: string
  label: string
}

export type DataPropTypes = Record<string, any> & {
  rowDetails?: {
    children: React.ReactNode
  }
}

export type TablePropTypes = {
  headers: HeaderPropTypes[]
  data: DataPropTypes[]
  onRowClick?: (row: DataPropTypes) => void
  checkbox?: boolean
  loading?: boolean
}

export type UseTablePropTypes = Pick<TablePropTypes, 'data'> & {
  setList: React.Dispatch<React.SetStateAction<DataPropTypes[]>>
}

export type RowPropTypes = Pick<TablePropTypes, 'headers' | 'checkbox' | 'onRowClick'> & {
  headersCheck: boolean
  row: DataPropTypes
  index: number
}

export type RowStyledPropTypes = {
  hasClickFunction: boolean
}