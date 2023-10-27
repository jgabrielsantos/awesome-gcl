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
    switch(this.useCase) {
      case 'primary':
        this.themes.toast.set('background-color', 'bg-primary-5')
        break;
      case 'success':
        this.themes.toast.set('background-color', 'bg-support-success-5')
        break;
      case 'alert':
        this.themes.toast.set('background-color', 'bg-support-alert-5')
        break;
      case 'warning':
        this.themes.toast.set('background-color', 'bg-support-warning-5')
        break;
    }
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