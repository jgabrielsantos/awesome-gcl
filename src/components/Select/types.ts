export type SelectOptionListPropTypes = {
  isOpen: boolean
}

export type SelectPropTypes = {
  label?: string
  selected?: Record<string, any>
  placeholder?: string
  options: Record<string, any>[]
  onChange: (option: Record<string, any>) => void
  icon?: string
  disabled?: boolean
  className?: string
}

export type UseSelectPropTypes = {
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}