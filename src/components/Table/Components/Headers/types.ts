export type HeaderAdditionalClasses = {
  header?: string[]
  icon?: string[]
}

export type HeaderComponentsEnum = 'header'
| 'icon'

export type HeaderPropTypes = {
  id: string
  label: string
  additionalClasses?: HeaderAdditionalClasses
}

export type HeaderConstructorPropTypes = {
  additionalClasses?: HeaderAdditionalClasses
}