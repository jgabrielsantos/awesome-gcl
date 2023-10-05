import React from 'react'
import { GSizeEnum } from '../../types'

type ButtonTypeEnum = 'button'
| 'submit'
| 'reset'

export type ButtonThemeEnum = 'primary'
| 'secondary'
| 'destructive'
| 'success'
| 'contrast'

export type ButtonComponentPropTypes = {
  children: React.ReactNode
  type: ButtonTypeEnum
  size: GSizeEnum
  theme: ButtonThemeEnum
  handleClick: React.MouseEventHandler<HTMLButtonElement>
  additionalClasses?: string[]
  disabled?: boolean
}
