import React from 'react'
import { GSizeEnum } from '../../types'

type IconButtonTypesEnum = 'button'
| 'submit'
| 'reset'

export type IconButtonThemesEnum = 'primary'
| 'secondary'
| 'tertiary'
| 'destructivePrimary'
| 'destructiveSecondary'
| 'successPrimary'
| 'successSecondary'
| 'contrastPrimary'
| 'contrastSecondary'

export type IconButtonAdditionalClassesPropTypes = {
  button: string[]
}

export type IconButtonConstructorPropTypes = Pick<IconButtonComponentPropTypes, 
  'additionalClasses'
  | 'theme'
  | 'size'
>

export type IconButtonComponentPropTypes = {
  children: any
  type: IconButtonTypesEnum
  size: GSizeEnum
  theme: IconButtonThemesEnum
  handleClick: React.MouseEventHandler<HTMLButtonElement>
  additionalClasses?: IconButtonAdditionalClassesPropTypes
  disabled?: boolean
  name?: string
  value?: string
}

export type IconButtonComponentsEnum = 'button'
