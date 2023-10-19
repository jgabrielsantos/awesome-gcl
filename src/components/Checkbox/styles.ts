import { CheckboxAdditionalClassesPropTypes, CheckboxComponentsEnum, CheckboxPropTypes, CheckboxSizeComponentsEnum } from "./types";
import Sizes from './sizes'
import Themes from './themes'
import { GSizeEnum } from "../types";
import themes from "./themes";

/**
 * @param size      controls the width and height
 * @param checked   controls the border color and background color
 * @returns         string with all tailwind classes to be used in the component
 * @see             Checkbox component
 */

interface ICheckboxStyle {
  getThemeRules: (component: CheckboxComponentsEnum) => Map<string, string>
  getSizeRules: (size: GSizeEnum, component: CheckboxSizeComponentsEnum) => Map<string, string>
  buildStyleRules: ({ size }: Pick<CheckboxPropTypes, 'size'>) => Record<string, string>
}

export class CheckboxStyles implements ICheckboxStyle {
  private additionalClasses: CheckboxAdditionalClassesPropTypes
  private sizes: Record<GSizeEnum, Record<CheckboxSizeComponentsEnum, Map<string, string>>> = {
    large: Sizes.largeSize(),
    medium: Sizes.mediumSize(),
    small: Sizes.smallSize()
  }
  private themes: Record<CheckboxComponentsEnum, Map<string,string>> = {
    wrapper: Themes.wrapper(),
    input: Themes.input(),
    icon: Themes.icon(),
    label: Themes.label()
  }

  constructor(additionalClasses: CheckboxAdditionalClassesPropTypes) {
    this.additionalClasses = additionalClasses
  }

  getThemeRules(component: CheckboxComponentsEnum) {
    return this.themes[component]
  }

  getSizeRules(size: GSizeEnum, component: CheckboxSizeComponentsEnum) {
    return this.sizes[size][component]
  }

  buildStyleRules({ size }: Pick<CheckboxPropTypes, 'size'>) {
    const classes = {
      wrapperClass: [
        ...this.getThemeRules('wrapper').values(),
        ...this.additionalClasses.wrapper
      ].join(' '),
      labelClass: [
        ...this.getThemeRules('label').values(),
        ...this.getSizeRules(size, 'label').values(),
        ...this.additionalClasses.label
      ].join(' '),
      inputClass: [
        ...this.getThemeRules('input').values(),
        ...this.getSizeRules(size, 'input').values(),
        ...this.additionalClasses.input
      ].join(' '),
      iconClass: [
        ...this.getThemeRules('icon').values(),
        ...this.additionalClasses.icon
      ].join(' ')
    }

    return classes
  };
}