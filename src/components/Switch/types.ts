import { GSizeEnum } from "../types"

export type SwitchPropTypes = {
  size: GSizeEnum
  checked: boolean
  handleClick: React.MouseEventHandler<HTMLDivElement>
  label?: string
  disabled?: boolean
  additionalClasses?: SwitchAdditionalClasses
}

export type SwitchComponentsEnum = 'wrapper'
| 'label'
| 'switchWrapper'
| 'input'
| 'span'

export type SwitchSizeComponentsEnum = 'wrapper'
| 'label'
| 'span'

export type SwitchAdditionalClasses = {
  wrapper?: string[]
  label?: string[]
  switchWrapper?: string[]
  input?: string[]
  span?: string[]
}

export type SwitchConstructorPropTypes = Pick<SwitchPropTypes,
  'size'
| 'additionalClasses'
| 'disabled'
>
