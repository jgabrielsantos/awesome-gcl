import { GSizeEnum } from "../types"

export type ListItemPropTypes = {
  id: string
  label: string
}

export type SelectMultiComponentsEnum = 'wrapper'
| 'label'
| 'input'
| 'placeholder'
| 'selectedItem'
| 'selectedList'
| 'optionItem'
| 'optionList'

export type SelectMultiSizeComponentsEnum = 'label'
| 'input'
| 'selectedItem'
| 'selectedList'
| 'optionList'

export type SelectMultiAdditionalClassesPropTypes = {
  wrapper?: string[]
  label?: string[]
  input?: string[]
  placeholder?: string[]
  selectedItem?: string[]
  selectedList?: string[]
  optionItem?: string[]
  optionList?: string[]
}

export type SelectMultiConstructorPropTypes = {
  additionalClasses?: SelectMultiAdditionalClassesPropTypes
  size: GSizeEnum
  disabled?: boolean
  isOpen: boolean
}

export type SelectMultiPropTypes = {
  options: ListItemPropTypes[]
  addOption: (value: ListItemPropTypes) => void
  removeOption: (value: ListItemPropTypes) => void
  label?: string
  selected?: ListItemPropTypes[]
  disabled?: boolean
  placeholder?: string
  size: GSizeEnum
  additionalClasses?: SelectMultiAdditionalClassesPropTypes
}

export type UseSelectMultiPropTypes = {
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  selectedList: ListItemPropTypes[]
  disabled: boolean
}