import { useState } from "react"
import { ListItemPropTypes, UseSelectMultiPropTypes } from "../types"

export const toggleOptionsListVisibility = ({
  isVisible,
  setIsVisible
}: Readonly<Pick<UseSelectMultiPropTypes, 'isVisible' | 'setIsVisible'>>) => () => {
  setIsVisible(!isVisible)
}

export const markCheckbox = ({
  selectedList
}: Readonly<Pick<UseSelectMultiPropTypes, 'selectedList'>>) => (optionItem: ListItemPropTypes) => {
  if (selectedList.find(selected => selected.id === optionItem.id)) return true
  return false
}

export const useSelectMulti = ({
  selectedList
}: Readonly<Pick<UseSelectMultiPropTypes, 'selectedList'>>) => {
  const [isOptionListVisible, setIsOptionListVisible] = useState(false)

  return {
    hookIsOptionListVisible: isOptionListVisible,
    hookSetIsOptionListVisible: toggleOptionsListVisibility({
      isVisible: isOptionListVisible,
      setIsVisible: setIsOptionListVisible
    }),
    hookMarkCheckbox: markCheckbox({
      selectedList
    }),
  }
}