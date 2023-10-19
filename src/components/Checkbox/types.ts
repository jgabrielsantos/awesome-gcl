import { GSizeEnum } from "../types"

export type CheckboxComponentsEnum = 'wrapper'
| 'input'
| 'icon'
| 'label'

export type CheckboxSizeComponentsEnum = 'input'
| 'label'
| 'icon'

export type CheckboxAdditionalClassesPropTypes = {
  wrapper: string[]
  label: string[]
  input: string[]
  icon: string[]
}

export type CheckboxPropTypes = {
  checked: boolean
  size: GSizeEnum
  handleClick?: React.MouseEventHandler<HTMLDivElement>
  disabled?: boolean
  label?: string
  additionalClasses?: CheckboxAdditionalClassesPropTypes
}
