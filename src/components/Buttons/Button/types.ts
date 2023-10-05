import React from 'react'
import { GSizeEnum } from '../../types'

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

export type ButtonComponentPropTypes = {
  children: React.ReactNode
  type: ButtonTypeEnum
  size: GSizeEnum
  theme: ButtonThemeEnum
  handleClick: React.MouseEventHandler<HTMLButtonElement>
  additionalClasses?: string[]
  disabled?: boolean
}
