export type ListItemPropTypes = {
  id: string
  label: string
}

export type SelectMultiPropTypes = {
  options: ListItemPropTypes[]
  addOption: (value: ListItemPropTypes) => void
  removeOption: (value: ListItemPropTypes) => void
  label?: string
  selected?: ListItemPropTypes[]
  disabled?: boolean
  placeholder?: string
  className?: string
}

export type StyledPropTypes = Readonly<Pick<SelectMultiPropTypes, 'disabled'>> & {
  isOpen: boolean
}

export type UseSelectMultiPropTypes = {
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  selectedList: ListItemPropTypes[]
}