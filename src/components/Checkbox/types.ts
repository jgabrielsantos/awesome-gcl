export type CheckboxSizeEnum = 'large'
| 'medium'
| 'small'

export type CheckboxAdditionalClassesPropTypes = {
  wrapper: string[]
  label: string[]
  input: string[]
  icon: string[]
}

export type CheckboxPropTypes = {
  checked: boolean
  size: CheckboxSizeEnum
  handleClick?: React.MouseEventHandler<HTMLDivElement>
  disabled?: boolean
  label?: string
  error?: boolean
  additionalClasses?: CheckboxAdditionalClassesPropTypes
}
