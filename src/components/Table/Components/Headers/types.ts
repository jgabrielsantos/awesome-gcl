export type HeaderAdditionalClasses = {
  header: string[]
  icon: string[]
}

export type HeaderPropTypes = {
  id: string
  label: string
  additionalClasses?: HeaderAdditionalClasses
}