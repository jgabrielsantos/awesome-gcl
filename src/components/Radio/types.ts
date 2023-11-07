import { GSizeEnum } from "../types"

export type RadioComponentsEnum = 'wrapper'
| 'input'
| 'spanWrapper'
| 'span'
| 'section'
| 'label'
| 'caption'

export type RadioSizeComponentsEnum = 'wrapper'
| 'span'
| 'label'
| 'caption'

export type RadioAdditionalClassesPropTypes = {
  wrapper?: string[]
  input?: string[]
  spanWrapper?: string[]
  span?: string[]
  section?: string[]
  label?: string[]
  caption?: string[]
}

export type RadioConstructorPropTypes = {
  size: GSizeEnum
  alert?: boolean
  additionalClasses?: RadioAdditionalClassesPropTypes
}

export type RadioPropTypes = {
  id: string
  size: GSizeEnum
  checked: boolean
  handleClick: (id: string) => void
  label?: string
  caption?: string
  alert?: boolean
  disabled?: boolean
  additionalClasses?: RadioAdditionalClassesPropTypes
}
