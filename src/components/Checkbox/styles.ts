import { CheckboxAdditionalClassesPropTypes, CheckboxComponentsEnum, CheckboxPropTypes } from "./types";
import Sizes from './sizes'
import Themes from './themes'
import { GSizeEnum } from "../types";

/**
 * @param size      controls the width and height
 * @param checked   controls the border color and background color
 * @returns         string with all tailwind classes to be used in the component
 * @see             Checkbox component
 */

interface ICheckboxStyle {
  getSizeRules: (size: GSizeEnum, component: CheckboxComponentsEnum) => Map<string, string>
  buildStyleRules: ({ size }: Pick<CheckboxPropTypes, 'size'>) => Record<string, string>
}

export class CheckboxStyles implements ICheckboxStyle {
  private additionalClasses: CheckboxAdditionalClassesPropTypes
  private sizes: Record<GSizeEnum, Record<CheckboxComponentsEnum, Map<string, string>>> = {
    large: Sizes.largeSize(),
    medium: Sizes.mediumSize(),
    small: Sizes.smallSize()
  }

  constructor({ wrapper, label, input, icon }: CheckboxAdditionalClassesPropTypes) {
    this.additionalClasses = {
      wrapper,
      label,
      icon,
      input
    }
  }

  getSizeRules(size: GSizeEnum, component: CheckboxComponentsEnum) {
    return this.sizes[size][component]
  }

  buildStyleRules({ size }: Pick<CheckboxPropTypes, 'size'>) {
    const classes = {
      wrapperClass: [
        ...Themes.wrapperRules().values(),
        ...this.additionalClasses.wrapper
      ].join(' '),
      labelClass: [
        ...Themes.labelRules().values(),
        ...this.getSizeRules(size, 'label').values(),
        ...this.additionalClasses.label
      ].join(' '),
      inputClass: [
        ...Themes.inputRules().values(),
        ...this.getSizeRules(size, 'input').values(),
        ...this.additionalClasses.input
      ].join(' '),
      iconClass: [
        ...Themes.iconRules({ size }).values(),
        ...this.additionalClasses.icon
      ].join(' ')
    }

    return classes
  };
}