import { ToastComponentPropTypes } from "./Components/Toast/types"

export type ToastListComponentsEnum = 'wrapper'

export type ToastListComponentPropType = {
  toastList: ToastComponentPropTypes[]
  additionalClasses?: string[]
}

export type UseToastListPropTypes = {
  toastList: ToastComponentPropTypes[]
  setToastList: React.Dispatch<React.SetStateAction<ToastComponentPropTypes[]>>
}