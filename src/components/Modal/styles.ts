import { ModalAdditionalClassesPropTypes, ModalComponentsEnum, ModalPropTypes } from "./types";
import Themes from './themes'

interface ModalStyle {
  getThemeRules: (component: ModalComponentsEnum, isOpen: boolean) => Map<string, string>
  buildStyleRules: ({ isOpen }: Pick<ModalPropTypes, 'isOpen'>) => Record<string, string>
}

export class ModalStyles implements ModalStyle {
  private additionalClasses: ModalAdditionalClassesPropTypes
  private themes: Record<ModalComponentsEnum, ({ isOpen }: Pick<ModalPropTypes, 'isOpen'>) => Map<string, string>> = {
    wrapper: Themes.wrapper,
    dialog: Themes.dialog
  }

  constructor(additionalClasses: ModalAdditionalClassesPropTypes) {
    this.additionalClasses = additionalClasses
  }

  getThemeRules(component: ModalComponentsEnum, isOpen: boolean) {
    return this.themes[component]({ isOpen })
  }

  buildStyleRules({ isOpen }: Pick<ModalPropTypes, 'isOpen'>) {
    const classes = {
      wrapperClass: [
        ...this.getThemeRules('wrapper', isOpen).values(),
        ...this.additionalClasses.wrapper
      ].join(' '),
      dialogClass: [
        ...this.getThemeRules('dialog', isOpen).values(),
        ...this.additionalClasses.dialog
      ].join(' ')
    }

    return classes
  }
}
