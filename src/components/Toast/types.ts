type ToastThemePropTypes = 'info' | 'success' | 'fail' | 'warning'

export type ToastComponentPropTypes = {
  name: string
  theme: ToastThemePropTypes
  isOpen: boolean
  handleClose: () => void
  children: React.ReactNode
  className?: string
}

export type ToastWrapperPropType = {
  toasts: ToastComponentPropTypes[]
}