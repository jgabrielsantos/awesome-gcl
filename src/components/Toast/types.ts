type ToastThemePropTypes = 'info' | 'success' | 'fail' | 'warning'

export type ToastComponentPropTypes = {
  id: string
  theme: ToastThemePropTypes
  isOpen: boolean
  handleClose: () => void
  children: React.ReactNode
  className?: string
}

export type ToastWrapperPropType = {
  toasts: ToastComponentPropTypes[]
}