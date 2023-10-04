import { CheckboxAdditionalClassesPropTypes, CheckboxPropTypes, CheckboxSizeEnum } from "./types";
import Sizes from './sizes'
import Themes from './themes'

/**
 * @param size      controls the width and height
 * @param checked   controls the border color and background color
 * @returns         string with all tailwind classes to be used in the component
 * @see             Checkbox component
 */

interface ICheckboxStyle {
  getSizeRules: ({ size }: Pick<CheckboxPropTypes, 'size'>) => Map<string, string>
  buildStyleRules: ({ size, checked }: Pick<CheckboxPropTypes, 'size' | 'checked'>) => Record<string, string>
}

export class CheckboxStyles implements ICheckboxStyle {
  private additionalClasses: CheckboxAdditionalClassesPropTypes
  private sizes: Record<CheckboxSizeEnum, Map<string, string>> = {
    large: Sizes.largeSize,
    medium: Sizes.mediumSize,
    small: Sizes.smallSize
  }

  constructor({ wrapper, label, input }: CheckboxAdditionalClassesPropTypes) {
    this.additionalClasses = {
      wrapper,
      label,
      input
    }
  }

  getSizeRules({ size }: Pick<CheckboxPropTypes, 'size'>) {
    return this.sizes[size]
  }

  buildStyleRules({ size, checked }: Pick<CheckboxPropTypes, 'size' | 'checked'>) {
    const classes = {
      wrapperClass: [
        ...Themes.wrapperRules().values(),
        ...this.additionalClasses.wrapper
      ].join(' '),
      labelClass: [
        ...Themes.labelRules().values(),
        ...this.additionalClasses.label
      ].join(' '),
      inputClass: [
        ...Themes.inputRules({ checked }).values(),
        ...this.getSizeRules({ size }).values(),
        ...this.additionalClasses.input
      ].join(' '),
    }

    return classes
  };
}