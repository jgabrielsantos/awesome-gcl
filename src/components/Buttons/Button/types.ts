import React from 'react'
import { GSizeEnum } from '../../types'

type ButtonTypesEnum = 'button'
| 'submit'
| 'reset'

export type ButtonThemesEnum = 'primary'
| 'secondary'
| 'tertiary'
| 'destructivePrimary'
| 'destructiveSecondary'
| 'successPrimary'
| 'successSecondary'
| 'contrastPrimary'
| 'contrastSecondary'

export type ButtonAdditionalClassesPropTypes = {
  button: string[]
}

export type ButtonConstructorPropTypes = Pick<ButtonComponentPropTypes,
  'additionalClasses'
  | 'theme'
  | 'size'
>

export type ButtonComponentPropTypes = {
  children: React.ReactNode
  type: ButtonTypesEnum
  size: GSizeEnum
  theme: ButtonThemesEnum
  handleClick: React.MouseEventHandler<HTMLButtonElement>
  additionalClasses?: ButtonAdditionalClassesPropTypes
  disabled?: boolean
  name?: string
  value?: string
}

export type ButtonComponentsEnum = 'button'
