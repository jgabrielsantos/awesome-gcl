export type SelectOptionListPropTypes = {
  isOpen: boolean
}

export type InputWrapperPropTypes = {
  disabled: boolean
}

export type SelectedPropTypes = {
  label: string
  value: any
}

export type SelectPropTypes = {
  label?: string
  selected?: SelectedPropTypes
  placeholder?: string
  options: SelectedPropTypes[]
  onChange: (option: SelectedPropTypes) => void
  icon?: string
  disabled?: boolean
  className?: string
}

export type UseSelectPropTypes = {
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  onChange: (option: SelectedPropTypes) => void
}