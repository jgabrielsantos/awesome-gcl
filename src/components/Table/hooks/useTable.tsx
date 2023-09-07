import { useState } from "react"
import { UseTablePropTypes } from "../types"

export const setHeaderCheckHandler = ({
  headerCheck,
  setHeaderCheck,
}: Record<string, any>) => () => {
  setHeaderCheck(!headerCheck)
}

export const getCheckedRows = ({
  data
}: Pick<UseTablePropTypes, 'data'>) => {
  data.filter(row => row.checked === true)
}

export const useTable = () => {
  const [headerCheck, setHeaderCheck] = useState(false)

  return {
    hookHeaderCheck: headerCheck,
    hookSetHeaderCheck: setHeaderCheckHandler({
      headerCheck,
      setHeaderCheck
    })
  }
}