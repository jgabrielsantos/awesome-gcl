import { ModalComponentsEnum, ModalConstructorPropTypes, ModalPropTypes } from "./types";
import Themes from './themes'

interface ModalStyle {
  buildStyleRules: () => Record<`${ModalComponentsEnum}Class`, string>
}

export class ModalStyles implements ModalStyle {
  private additionalClasses: {
    wrapper: string[]
    dialog: string[]
  }
  private isOpen: boolean
  private themes: Record<ModalComponentsEnum, ({ isOpen }: Pick<ModalPropTypes, 'isOpen'>) => Map<string, string>> = {
    wrapper: Themes.wrapper,
    dialog: Themes.dialog
  }

  constructor({
    additionalClasses,
    isOpen
  }: ModalConstructorPropTypes) {
    this.additionalClasses = {
      wrapper: additionalClasses?.wrapper || [],
      dialog: additionalClasses?.dialog || []
    }
    this.isOpen = isOpen
  }

  private getThemeRules(component: ModalComponentsEnum) {
    return this.themes[component]({ isOpen: this.isOpen })
  }

  buildStyleRules() {
    const classes = {
      wrapperClass: [
        ...this.getThemeRules('wrapper').values(),
        ...this.additionalClasses.wrapper
      ].join(' '),
      dialogClass: [
        ...this.getThemeRules('dialog').values(),
        ...this.additionalClasses.dialog
      ].join(' ')
    }

    return classes
  }
}
