import { useState } from "react"
import { ListItemPropTypes, UseSelectMultiPropTypes } from "../types"

export const toggleOptionsListVisibility = ({
  isVisible,
  setIsVisible,
  disabled
}: Readonly<Pick<UseSelectMultiPropTypes, 'isVisible' | 'setIsVisible' | 'disabled'>>) => (event: React.MouseEvent) => {
  event.stopPropagation()
  if (disabled) return
  setIsVisible(!isVisible)
}

export const markCheckbox = ({
  selectedList,
}: Readonly<Pick<UseSelectMultiPropTypes, 'selectedList'>>) => (optionItem: ListItemPropTypes) => {
  if (selectedList) return selectedList.find(selected => selected.id === optionItem.id)
}

export const useSelectMulti = ({
  selectedList,
  disabled
}: Readonly<Pick<UseSelectMultiPropTypes, 'selectedList' | 'disabled'>>) => {
  const [isOptionListVisible, setIsOptionListVisible] = useState(false)

  return {
    hookIsOptionListVisible: isOptionListVisible,
    hookSetIsOptionListVisible: toggleOptionsListVisibility({
      isVisible: isOptionListVisible,
      setIsVisible: setIsOptionListVisible,
      disabled
    }),
    hookMarkCheckbox: markCheckbox({
      selectedList
    })
  }
}