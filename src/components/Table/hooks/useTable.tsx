import { useEffect, useState } from "react"
import { DataPropTypes, UseTablePropTypes } from "../types"

export const setHeaderCheckHandler = ({
  headerCheck,
  setHeaderCheck,
}: Record<string, any>) => () => {
  setHeaderCheck(!headerCheck)
}

export const useTable = ({
  data
}: Pick<UseTablePropTypes, 'data'>) => {
  const [headerCheck, setHeaderCheck] = useState(false)

  return {
    hookHeaderCheck: headerCheck,
    hookSetHeaderCheck: setHeaderCheckHandler({
      headerCheck,
      setHeaderCheck
    })
  }
}