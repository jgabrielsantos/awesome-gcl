import React from 'react'
import { GSizeEnum } from '../../types'

type TextButtonTypeEnum = 'button'
| 'submit'
| 'reset'

export type TextButtonThemeEnum = 'primary'
| 'secondary'
| 'destructive'
| 'success'
| 'contrast'

export type TextButtonAdditionalClassesPropTypes = {
  button: string[]
}

export type TextButtonConstructorPropTypes = Pick<TextButtonComponentPropTypes,
  'additionalClasses'
  | 'theme'
  | 'size'
>

export type TextButtonComponentPropTypes = {
  children: React.ReactNode
  type: TextButtonTypeEnum
  size: GSizeEnum
  theme: TextButtonThemeEnum
  handleClick: React.MouseEventHandler<HTMLButtonElement>
  additionalClasses?: TextButtonAdditionalClassesPropTypes
  disabled?: boolean
}

export type TextButtonComponentsEnum = 'button'
