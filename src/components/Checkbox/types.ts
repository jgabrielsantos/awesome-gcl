export type CheckboxPropTypes = {
  checked: boolean
  handleClick: React.MouseEventHandler
  disabled?: boolean
  description?: string
  className?: string
}

export type StyledPropTypes = Readonly<Pick<CheckboxPropTypes, 'checked'>>