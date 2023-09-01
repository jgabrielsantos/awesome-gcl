type HeaderPropTypes = {
  id: string
  label: string
  //  sort feature
}

export type TablePropTypes = {
  headers: HeaderPropTypes[]
  data: Record<string, any>[]
  loading?: boolean
}