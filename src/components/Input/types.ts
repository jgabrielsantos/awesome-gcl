import { GSizeEnum } from "../types"

type InputTypePropTypes = 'text' | 'password' | 'email' | 'tel' | 'number'

export type InputAdditionalClassesPropTypes = {
  wrapper: string[]
  label: string[]
  input: string[]
  caption: string[]
}

export type InputPropTypes = {
  type: InputTypePropTypes
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  label?: string
  placeholder?: string
  error?: boolean
  errorMessage?: string
  showPassword?: boolean
  disabled?: boolean
  pattern?: string
  size: GSizeEnum
  additionalClasses?: InputAdditionalClassesPropTypes
}

export type InputWrapperStyledPropTypes = Readonly<Pick<InputPropTypes, 'error' | 'disabled'>>

export type UseInputPropTypes = Readonly<Pick<InputPropTypes, 'type' | 'showPassword'>>

export type ShowPasswordValuePropTypes = {
  passwordVisible: boolean
  setPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>
  setType: React.Dispatch<React.SetStateAction<InputTypePropTypes>>
}
