import Themes from "./themes"
import {
  HeaderComponentsEnum,
  HeaderConstructorPropTypes
} from "./types"

interface HeaderStyle { 
  buildStyleRules: () => Record<`${HeaderComponentsEnum}Class`, string>
}

export class HeaderStyles implements HeaderStyle {
  private themes: Record<HeaderComponentsEnum, Map<string, string>> = {
    header: Themes.header(),
    icon: Themes.icon(),
  }
  private additionalClasses: {
    header: string[]
    icon: string[]
  }

  constructor({
    additionalClasses
  }: HeaderConstructorPropTypes) {
    this.additionalClasses = {
      header: additionalClasses?.header || [],
      icon: additionalClasses?.icon || []
    }
  }

  buildStyleRules() {
    const classes = {
      headerClass: [
        ...this.themes.header.values(),
        ...this.additionalClasses.header
      ].join(' '),
      iconClass: [
        ...this.themes.icon.values(),
        ...this.additionalClasses.icon
      ].join(' ')
    }

    return classes
  }
}