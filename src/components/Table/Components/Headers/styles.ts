import Themes from "./themes"
import { HeaderAdditionalClasses } from "./types"

interface HeaderStyle { 
  buildStyleRules: () => Record<string, string>
}

export class HeaderStyles implements HeaderStyle {
  private additionalClasses: HeaderAdditionalClasses

  constructor(additionalClasses: HeaderAdditionalClasses) {
    this.additionalClasses = additionalClasses
  }

  buildStyleRules() {
    const classes = {
      headerClass: [
        ...Themes.header().values(),
        ...this.additionalClasses.header
      ].join(' '),
      iconClass: [
        ...Themes.icon().values(),
        ...this.additionalClasses.icon
      ].join(' ')
    }

    return classes
  }
}