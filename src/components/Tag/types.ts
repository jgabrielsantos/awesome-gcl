import { GSizeEnum } from "../types"

export type TagComponentsEnum = 'wrapper'
| 'children'

export type TagAdditionalClassesPropTypes = {
  wrapper?: string[]
  children?: string[]
}

export type TagConstructorPropTypes = {
  size: GSizeEnum
  additionalClasses?: TagAdditionalClassesPropTypes
}

export type TagPropTypes = {
  size: GSizeEnum
  children: React.ReactNode
  additionalClasses?: TagAdditionalClassesPropTypes
}
