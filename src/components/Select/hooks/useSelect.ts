import React, { useState } from "react"
import { UseSelectPropTypes } from "../types"

export const toggleOptionListVisibility = ({
  isVisible,
  setIsVisible,
}: Readonly<UseSelectPropTypes>) => () => {
  setIsVisible(!isVisible)
}

export const useSelect = () => {
  const [isOptionListVisible, setIsOptionListVisible] = useState(false)

  return {
    hookIsOptionListVisible: isOptionListVisible,
    hookSetIsOptionListVisible: toggleOptionListVisibility({
      isVisible: isOptionListVisible,
      setIsVisible: setIsOptionListVisible,
    }),
  }
}