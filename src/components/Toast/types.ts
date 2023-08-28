type ToastThemePropTypes = 'info' | 'success' | 'fail' | 'warning'

export type ToastComponentPropTypes = {
  id: string
  theme: ToastThemePropTypes
  isOpen: boolean
  handleClose: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  className?: string
}

export type ToastWrapperPropType = {
  toastList: ToastComponentPropTypes[]
}

export type UseToastPropTypes = ToastWrapperPropType & {
  setToastList: React.Dispatch<React.SetStateAction<ToastComponentPropTypes[]>>
}