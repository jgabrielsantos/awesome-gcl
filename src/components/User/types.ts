import { GSizeEnum } from "../types"

export type UserSizeComponentsEnum = 'avatar'
| 'initials'
| 'info'
| 'name'
| 'description'

export type UserAdditionalClassesPropTypes = {
  wrapper: string[]
  avatar: string[]
  initials: string[]
  info: string[]
  name: string[]
  description: string[]
}

export type UserPropTypes = {
  profileImage?: string
  firstName: string
  lastName: string
  description?: string
  size: GSizeEnum
  additionalClasses?: UserAdditionalClassesPropTypes
}