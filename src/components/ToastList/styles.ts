import Themes from './themes'
import { ToastListComponentsEnum } from './types'

interface ToastListStyle {
  buildStyleRules: () => Record<string, string>
}

export class ToastListStyles implements ToastListStyle {
  private additionalClasses: string[]
  private themes: Record<ToastListComponentsEnum, Map<string, string>> = {
    wrapper: Themes.wrapper()
  }

  constructor(additionalClasses: string[] = []) {
    this.additionalClasses = additionalClasses
  }

  private getThemeRules(component: ToastListComponentsEnum) {
    return this.themes[component]
  }

  buildStyleRules() {
    const classes = {
      wrapperClass: [
        ...this.getThemeRules('wrapper').values(),
        ...this.additionalClasses
      ].join(' ')
    }

    return classes
  }
}
