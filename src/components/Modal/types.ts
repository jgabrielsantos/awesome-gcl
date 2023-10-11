export type ModalAdditionalClassesPropTypes = {
  wrapper: string[]
  dialog: string[]
}

export type ModalPropTypes = {
  isOpen: boolean
  children: React.ReactNode
  additionalClasses?: ModalAdditionalClassesPropTypes
}

export type ModalStyledPropTypes = Readonly<Pick<ModalPropTypes, 'isOpen'>>