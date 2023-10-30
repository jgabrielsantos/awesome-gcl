export type ToastUseCaseEnums = 'primary'
| 'success'
| 'alert'
| 'warning'

export type ToastAdditionalClassesPropTypes = {
  toast: string[]
}

export type ToastConstructorStylePropTypes = Pick<ToastComponentPropTypes,
  'useCase'
  | 'isOpen'
  | 'additionalClasses'
>

export type ToastComponentPropTypes = {
  id: string
  useCase: ToastUseCaseEnums
  isOpen: boolean
  handleClose: React.MouseEventHandler<SVGSVGElement>
  children: React.ReactNode
  additionalClasses?: ToastAdditionalClassesPropTypes
}

export type ToastComponentsEnum = 'toast'
