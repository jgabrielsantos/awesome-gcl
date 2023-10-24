export type ModalAdditionalClassesPropTypes = {
  wrapper?: string[]
  dialog?: string[]
}

export type ModalComponentsEnum = 'wrapper'
| 'dialog'

export type ModalConstructorPropTypes = Pick<ModalPropTypes,
  'additionalClasses'
  | 'isOpen'
>

export type ModalPropTypes = {
  isOpen: boolean
  children: React.ReactNode
  additionalClasses?: ModalAdditionalClassesPropTypes
}
