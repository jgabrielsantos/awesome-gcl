export type CheckboxPropTypes = {
  checked: boolean
  handleClick?: React.MouseEventHandler
  disabled?: boolean
  label?: string
  className?: string
}

export type StyledPropTypes = Readonly<Pick<CheckboxPropTypes, 'checked'>>