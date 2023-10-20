import {
  ToastAdditionalClassesPropTypes,
  ToastBuilStylePropTypes,
  ToastComponentsEnum,
  ToastTypeEnums
} from "./types";
import Themes from './themes'

interface ToastStyle {
  getTypeRules: (type: ToastTypeEnums) => string
  getDisplayRules: (isOpen: boolean) => string
  buildStyleRules: ({
    type,
    isOpen
  }: ToastBuilStylePropTypes) => Record<string, string>
}

export class ToastStyles implements ToastStyle {
  private additionalClasses: ToastAdditionalClassesPropTypes
  private themes: Record<ToastComponentsEnum, Map<string, string>> = {
    toast: Themes.toast()
  }

  constructor(additionalClasses: ToastAdditionalClassesPropTypes) {
    this.additionalClasses = additionalClasses
  }

  getTypeRules(type: ToastTypeEnums): string {
    switch(type) {
      case 'info':
        return 'bg-primary-5'
      case 'success':
        return 'bg-support-success-5'
        case 'fail':
        return 'bg-support-alert-5'
      case 'warning':
        return 'bg-support-warning-5'
    }
  }

  getDisplayRules(isOpen: boolean): string {
    return isOpen ? 'flex' : 'hidden'
  }

  getThemeRules(component: ToastComponentsEnum) {
    return this.themes[component]
  }

  buildStyleRules({ type, isOpen }: ToastBuilStylePropTypes) {
    const classes = {
      toastClass: [
        ...this.getThemeRules('toast').values(),
        this.getDisplayRules(isOpen),
        this.getTypeRules(type),
        ...this.additionalClasses
      ].join(' ')
    }

    return classes
  }
}