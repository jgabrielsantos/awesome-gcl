import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { GSizeEnum } from "../types"

export type SelectComponentsEnum = 'wrapper'
| 'label'
| 'inputWrapper'
| 'input'
| 'optionList'
| 'optionItem'

export type SelectSizeComponentEnums = 'label'
| 'inputWrapper'
| 'input'
| 'optionList'

export type SelectAdditionalClassesPropTypes = {
  wrapper?: string[],
  label?: string[],
  inputWrapper?: string[],
  input?: string[],
  optionList?: string[],
  optionItem?: string[]
}

export type SelectConstructorPropTypes = {
  additionalClasses?: SelectAdditionalClassesPropTypes
  size: GSizeEnum
  disabled?: boolean
  isOpen: boolean
}

type ItemPropTypes = Record<string, any> & {
  label: string
}

export type SelectPropTypes = {
  label?: string
  selected?: ItemPropTypes
  placeholder?: string
  options: ItemPropTypes[]
  onChange: (option: ItemPropTypes) => void
  icon?: IconDefinition
  disabled?: boolean
  size: GSizeEnum
  additionalClasses?: SelectAdditionalClassesPropTypes
}

export type UseSelectPropTypes = {
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}