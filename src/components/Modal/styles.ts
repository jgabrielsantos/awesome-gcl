import { ModalAdditionalClassesPropTypes, ModalPropTypes } from "./types";
import Themes from './themes'

interface ModalStyle {
  buildStyleRules: ({ isOpen }: Pick<ModalPropTypes, 'isOpen'>) => Record<string, string>
}

export class ModalStyles implements ModalStyle {
  private additionalClasses: ModalAdditionalClassesPropTypes

  constructor(additionalClasses: ModalAdditionalClassesPropTypes) {
    this.additionalClasses = additionalClasses
  }

  buildStyleRules({ isOpen }: Pick<ModalPropTypes, 'isOpen'>) {
    const classes = {
      wrapperClass: [
        ...Themes.wrapper({ isOpen }).values(),
        ...this.additionalClasses.wrapper
      ].join(' '),
      dialogClass: [
        ...Themes.dialog({ isOpen }).values(),
        ...this.additionalClasses.dialog
      ].join(' ')
    }

    return classes
  }
}
