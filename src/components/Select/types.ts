import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { GSizeEnum } from "../types"

export type SelectSizeComponentEnums = 'label'
| 'inputWrapper'
| 'input'
| 'optionList'

export type SelectAdditionalClassesPropTypes = {
  wrapper: string[],
  label: string[],
  inputWrapper: string[],
  input: string[],
  optionList: string[],
  optionItem: string[]
}

export type SelectBuildStylesPropTypes = {
  size: GSizeEnum
  disabled: boolean
  isOpen: boolean
}

export type SelectPropTypes = {
  label?: string
  selected?: Record<string, any>
  placeholder?: string
  options: Record<string, any>[]
  onChange: (option: Record<string, any>) => void
  icon?: IconDefinition
  disabled?: boolean
  size: GSizeEnum
  additionalClasses?: SelectAdditionalClassesPropTypes
}

export type UseSelectPropTypes = {
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}