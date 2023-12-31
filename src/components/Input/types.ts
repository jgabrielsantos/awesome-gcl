import { GSizeEnum } from "../types"

type InputTypesEnum = 'text'
| 'password'
| 'email'
| 'tel'
| 'number'

export type InputSizeComponentsEnum = 'label'
| 'input'
| 'passwordButton'
| 'caption'

export type InputComponentsEnum = 'wrapper'
| 'label'
| 'inputWrapper'
| 'input'
| 'passwordButton'
| 'caption'

export type InputConstructorPropTypes = Pick<InputPropTypes,
  'additionalClasses'
  | 'size'
>

export type InputAdditionalClassesPropTypes = {
  wrapper?: string[]
  label?: string[]
  inputWrapper?: string[]
  input?: string[]
  passwordButton?: string[]
  caption?: string[]
}

export type InputPropTypes = {
  type: InputTypesEnum
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  label?: string
  caption?: string
  placeholder?: string
  showPassword?: boolean
  disabled?: boolean
  pattern?: string
  size: GSizeEnum
  additionalClasses?: InputAdditionalClassesPropTypes
}

export type UseInputPropTypes = {
  type: InputTypesEnum
  showPassword: boolean
}

export type ShowPasswordValuePropTypes = {
  passwordVisible: boolean
  setPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>
  setType: React.Dispatch<React.SetStateAction<InputTypesEnum>>
}
