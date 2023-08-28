export type ModalPropTypes = {
  isOpen: boolean
  children: React.ReactNode
  className?: string
}

export type ModalStyledPropTypes = Readonly<Pick<ModalPropTypes, 'isOpen'>>