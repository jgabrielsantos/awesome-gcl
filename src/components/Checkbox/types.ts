export type CheckboxSizeEnum = 'large'
| 'medium'
| 'small'

export type CheckboxAdditionalClassesPropTypes = {
  wrapper: string[]
  label: string[]
  input: string[]
}

export type CheckboxPropTypes = {
  checked: boolean
  size: CheckboxSizeEnum
  handleClick?: React.MouseEventHandler<HTMLInputElement>
  disabled?: boolean
  label?: string
  error?: boolean
  additionalClasses?: CheckboxAdditionalClassesPropTypes
}
