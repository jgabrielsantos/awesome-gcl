import Themes from './themes'

interface ToastListStyle {
  buildStyleRules: () => Record<string, string>
}

export class ToastListStyles implements ToastListStyle {
  private additionalClasses: string[]

  constructor(additionalClasses: string[]) {
    this.additionalClasses = additionalClasses
  }

  buildStyleRules() {
    const classes = {
      wrapperClass: [
        ...Themes.wrapper().values(),
        ...this.additionalClasses
      ].join(' ')
    }

    return classes
  }
}