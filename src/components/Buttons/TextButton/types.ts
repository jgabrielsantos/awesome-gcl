import React from 'react'

type ButtonTypeEnum = 'button'
| 'submit'
| 'reset'

export type ButtonThemeEnum = 'primary'
| 'secondary'
| 'destructive'
| 'success'
| 'contrast'

export type ButtonSizeEnum = 'large'
| 'medium'
| 'small'

export type ButtonComponentPropTypes = {
  children: React.ReactNode
  type: ButtonTypeEnum
  size: ButtonSizeEnum
  theme: ButtonThemeEnum
  handleClick: React.MouseEventHandler<HTMLButtonElement>
  additionalClasses?: string[]
  disabled?: boolean
}
