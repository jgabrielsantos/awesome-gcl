import {
  CheckboxComponentsEnum,
  CheckboxConstructorPropTypes,
  CheckboxSizeComponentsEnum
} from "./types";
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
  buildStyleRules: () => Record<`${CheckboxComponentsEnum}Class`, string>
}

export class CheckboxStyles implements ICheckboxStyle {
  private additionalClasses: {
    wrapper: string[]
    label: string[]
    input: string[]
    icon: string[]
  }
  private size: GSizeEnum
  private sizes: Record<GSizeEnum, Record<CheckboxSizeComponentsEnum, Map<string, string>>> = {
    large: Sizes.large(),
    medium: Sizes.medium(),
    small: Sizes.small()
  }
  private themes: Record<CheckboxComponentsEnum, Map<string,string>> = {
    wrapper: Themes.wrapper(),
    input: Themes.input(),
    icon: Themes.icon(),
    label: Themes.label()
  }

  constructor({
    additionalClasses,
    size
  }: CheckboxConstructorPropTypes) {
    this.additionalClasses = {
      wrapper: additionalClasses?.wrapper || [],
      label: additionalClasses?.label || [],
      input: additionalClasses?.input || [],
      icon: additionalClasses?.icon || []
    }
    this.size = size
  }

  private getThemeRules(component: CheckboxComponentsEnum) {
    return this.themes[component]
  }

  private getSizeRules(component: CheckboxSizeComponentsEnum) {
    return this.sizes[this.size][component]
  }

  buildStyleRules() {
    const classes = {
      wrapperClass: [
        ...this.getThemeRules('wrapper').values(),
        ...this.additionalClasses.wrapper
      ].join(' '),
      labelClass: [
        ...this.getThemeRules('label').values(),
        ...this.getSizeRules('label').values(),
        ...this.additionalClasses.label
      ].join(' '),
      inputClass: [
        ...this.getThemeRules('input').values(),
        ...this.getSizeRules('input').values(),
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