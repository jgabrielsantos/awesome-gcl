import React, { useState } from "react"
import { SelectedPropTypes, UseSelectPropTypes } from "../types"

export const toggleOptionListVisibility = ({
  isVisible,
  setIsVisible,
  onChange
}: Readonly<UseSelectPropTypes>) => (value: SelectedPropTypes) => {
  onChange(value)
  setIsVisible(!isVisible)
}

export const useSelect = ({ onChange }: Readonly<Pick<UseSelectPropTypes, 'onChange'>>) => {
  const [isOptionListVisible, setIsOptionListVisible] = useState(false)

  return {
    hookIsOptionListVisible: isOptionListVisible,
    hookSetIsOptionListVisible: toggleOptionListVisibility({
      isVisible: isOptionListVisible,
      setIsVisible: setIsOptionListVisible,
      onChange
    }) as any as React.MouseEventHandler<HTMLElement>,
  }
}