export type ModalAdditionalClassesPropTypes = {
  wrapper: string[]
  dialog: string[]
}

export type ModalComponentsEnum = 'wrapper'
| 'dialog'

export type ModalPropTypes = {
  isOpen: boolean
  children: React.ReactNode
  additionalClasses?: ModalAdditionalClassesPropTypes
}
