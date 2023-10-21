import Themes from './themes'
import {
  ToastAdditionalClassesPropTypes,
  ToastComponentsEnum,
  ToastConstructorStylePropTypes,
  ToastUseCaseEnums
} from "./types";

interface ToastStyle {
  buildStyleRules: () => Record<string, string>
}

export class ToastStyles implements ToastStyle {
  private additionalClasses: ToastAdditionalClassesPropTypes
  private useCase: ToastUseCaseEnums
  private isOpen: boolean
  private themes: Record<ToastComponentsEnum, Map<string, string>> = {
    toast: Themes.toast()
  }

  constructor({
    additionalClasses = {
      toast: []
    },
    useCase,
    isOpen
  }: ToastConstructorStylePropTypes) {
    this.additionalClasses = additionalClasses
    this.useCase = useCase
    this.isOpen = isOpen
  }

  private getBackgroundRules(): void {
    const background = this.useCase === 'primary' ?
    `bg-${this.useCase}-5` :
    `bg-support-${this.useCase}-5`

    this.themes.toast.set('background-color', background)
  }

  private getDisplayRules(): void {
    this.themes.toast.set('display', this.isOpen ? 'flex' : 'hidden')
  }

  private getThemeRules(component: ToastComponentsEnum) {
    return this.themes[component]
  }

  buildStyleRules() {
    this.getBackgroundRules()
    this.getDisplayRules()

    const classes = {
      toastClass: [
        ...this.getThemeRules('toast').values(),
        ...this.additionalClasses.toast
      ].join(' ')
    }

    return classes
  }
}