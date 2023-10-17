import {
  UserAdditionalClassesPropTypes,
  UserSizeComponentsEnum
} from "./types";
import { GSizeEnum } from "../types";
import Sizes from './sizes'
import Themes from './themes'

interface UserStyle {
  buildStyleRules: (size: GSizeEnum) => Record<string, string>
}

export class UserStyles implements UserStyle {
  private additionalClasses: UserAdditionalClassesPropTypes
  private sizes: Record<GSizeEnum, Record<UserSizeComponentsEnum, Map<string, string>>> = {
    large: Sizes.large(),
    medium: Sizes.medium(),
    small: Sizes.small()
  }

  constructor(additionalClasses: UserAdditionalClassesPropTypes) {
    this.additionalClasses = additionalClasses
  }

  private getSizeRules (size: GSizeEnum, component: UserSizeComponentsEnum) {
    return this.sizes[size][component]
  }

  buildStyleRules(size: GSizeEnum) {
    const classes = {
      wrapperClass: [
        ...Themes.wrapper().values(),
        ...this.additionalClasses.wrapper
      ].join(' '),
      avatarClass: [
        ...Themes.avatar().values(),
        ...this.getSizeRules(size, 'avatar').values(),
        ...this.additionalClasses.avatar
      ].join(' '),
      initialsClass: [
        ...Themes.initials().values(),
        ...this.getSizeRules(size, 'initials').values(),
        ...this.additionalClasses.initials
      ].join(' '),
      infoClass: [
        ...Themes.info().values(),
        ...this.getSizeRules(size, 'info').values(),
        ...this.additionalClasses.info
      ].join(' '),
      nameClass: [
        ...Themes.name().values(),
        ...this.getSizeRules(size, 'name').values(),
        ...this.additionalClasses.name
      ].join(' '),
      descriptionClass: [
        ...Themes.description().values(),
        ...this.getSizeRules(size, 'description').values(),
        ...this.additionalClasses.description
      ].join(' ')
    }

    return classes
  }
}
