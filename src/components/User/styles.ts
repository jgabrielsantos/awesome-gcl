import {
  UserComponentsEnum,
  UserConstructorPropTypes,
  UserSizeComponentsEnum
} from "./types";
import { GSizeEnum } from "../types";
import Sizes from './sizes'
import Themes from './themes'

interface UserStyle {
  buildStyleRules: (size: GSizeEnum) => Record<`${UserComponentsEnum}Class`, string>
}

export class UserStyles implements UserStyle {
  private size: GSizeEnum
  private sizes: Record<GSizeEnum, Record<UserSizeComponentsEnum, Map<string, string>>> = {
    large: Sizes.large(),
    medium: Sizes.medium(),
    small: Sizes.small()
  }
  private themes: Record<UserComponentsEnum, Map<string, string>> = {
    wrapper: Themes.wrapper(),
    avatar: Themes.avatar(),
    initials: Themes.initials(),
    info: Themes.info(),
    name: Themes.name(),
    description: Themes.description()
  }
  private additionalClasses: {
    wrapper: string[]
    avatar: string[]
    initials: string[]
    info: string[]
    name: string[]
    description: string[]
  }

  constructor({
    additionalClasses,
    size
  }: UserConstructorPropTypes) {
    this.size = size
    this.additionalClasses = {
      wrapper: additionalClasses?.wrapper || [],
      avatar: additionalClasses?.avatar || [],
      initials: additionalClasses?.initials || [],
      info: additionalClasses?.info || [],
      name: additionalClasses?.name || [],
      description: additionalClasses?.description || []
    }
  }

  private getSizeRules (component: UserSizeComponentsEnum) {
    return this.sizes[this.size][component]
  }

  buildStyleRules() {
    const classes = {
      wrapperClass: [
        ...this.themes.wrapper.values(),
        ...this.additionalClasses.wrapper
      ].join(' '),
      avatarClass: [
        ...this.themes.avatar.values(),
        ...this.getSizeRules('avatar').values(),
        ...this.additionalClasses.avatar
      ].join(' '),
      initialsClass: [
        ...this.themes.initials.values(),
        ...this.getSizeRules('initials').values(),
        ...this.additionalClasses.initials
      ].join(' '),
      infoClass: [
        ...this.themes.info.values(),
        ...this.getSizeRules('info').values(),
        ...this.additionalClasses.info
      ].join(' '),
      nameClass: [
        ...this.themes.name.values(),
        ...this.getSizeRules('name').values(),
        ...this.additionalClasses.name
      ].join(' '),
      descriptionClass: [
        ...this.themes.description.values(),
        ...this.getSizeRules('description').values(),
        ...this.additionalClasses.description
      ].join(' ')
    }

    return classes
  }
}
