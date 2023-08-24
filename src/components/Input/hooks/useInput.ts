import { useState } from "react"
import { ShowPasswordValuePropTypes, UseInputPropTypes } from "../types"

export const setPasswordVisibleHandler = ({
  passwordVisible,
  setPasswordVisible,
  setType
}: ShowPasswordValuePropTypes) => () => {
  setPasswordVisible(!passwordVisible)
  setType(passwordVisible ? 'password' : 'text')
}

export const useInput = ({
  type,
  showPassword = false
}: UseInputPropTypes) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(showPassword)
  const [inputType, setInputType] = useState(type)

  return {
    hookType: inputType,
    hookPasswordVisible: passwordVisible,
    hookSetPasswordVisible: setPasswordVisibleHandler({
      passwordVisible,
      setPasswordVisible,
      setType: setInputType
    })
  }
}