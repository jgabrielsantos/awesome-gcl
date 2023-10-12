import {
  ToastAdditionalClassesPropTypes,
  ToastBuilStylePropTypes,
  ToastTypeEnums
} from "./types";
import Themes from './themes'

interface ToastStyle {
  buildStyleRules: ({
    type,
    isOpen
  }: ToastBuilStylePropTypes) => Record<string, string>
}

export class ToastStyles implements ToastStyle {
  private additionalClasses: ToastAdditionalClassesPropTypes

  constructor(additionalClasses: ToastAdditionalClassesPropTypes) {
    this.additionalClasses = additionalClasses
  }

  private getTypeRules(type: ToastTypeEnums): string {
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

  buildStyleRules({ type, isOpen }: ToastBuilStylePropTypes) {
    const classes = {
      toastClass: [
        ...Themes.toast(isOpen, type).values(),
        this.getTypeRules(type),
        ...this.additionalClasses
      ].join(' ')
    }

    return classes
  }
}