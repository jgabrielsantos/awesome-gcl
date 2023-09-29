import React from 'react'

type ButtonTypeEnum = 'button'
| 'submit'
| 'reset'

export type ButtonThemeEnum = 'primary'
| 'secondary'
| 'tertiary'
| 'destructive-primary'
| 'destructive-secondary'
| 'success-primary'
| 'success-secondary'
| 'contrast-primary'
| 'contrast-secondary'

export type ButtonSizeEnum = 'large'
| 'medium'
| 'small'

export type ButtonComponentPropTypes = {
  children: React.ReactNode
  type: ButtonTypeEnum
  size: ButtonSizeEnum
  theme: ButtonThemeEnum
  handleClick: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}