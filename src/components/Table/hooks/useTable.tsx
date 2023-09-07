import { useState } from "react"

export const useTable = () => {
  const [headerCheck, setHeaderCheck] = useState(false)

  return {
    hookHeaderCheck: headerCheck,
    hookSetHeaderCheck: setHeaderCheck
  }
} 