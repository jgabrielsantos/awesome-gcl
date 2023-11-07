import Themes from './themes'
import Sizes from './sizes'
import { RadioComponentsEnum, RadioConstructorPropTypes, RadioSizeComponentsEnum } from "./types";
import { GSizeEnum } from '../types';

interface IRadioStyles {
  buildStyleRules: () => Record<`${RadioComponentsEnum}Class`, string>
}

export class RadioStyles implements IRadioStyles {
  private themes: Record<RadioComponentsEnum, Map<string ,string>> = {
    wrapper: Themes.wrapper(),
    input: Themes.input(),
    spanWrapper: Themes.spanWrapper(),
    span: Themes.span(),
    section: Themes.section(),
    label: Themes.label(),
    caption: Themes.caption()
  }
  private size: GSizeEnum
  private sizes: Record<GSizeEnum, Record<RadioSizeComponentsEnum, Map<string, string>>> = {
    large: Sizes.large(),
    medium: Sizes.medium(),
    small: Sizes.small()
  }
  private alert: boolean
  private additionalClasses: Record<RadioComponentsEnum, string[]>

  constructor({
    size,
    alert,
    additionalClasses
  }: RadioConstructorPropTypes) {
    this.size = size
    this.alert = alert || false
    this.additionalClasses = {
      wrapper: additionalClasses?.wrapper || [],
      input: additionalClasses?.input || [],
      spanWrapper: additionalClasses?.spanWrapper || [],
      span: additionalClasses?.span || [],
      section: additionalClasses?.section || [],
      label: additionalClasses?.label || [],
      caption: additionalClasses?.caption || []
    }
  }

  private getAlertRules() {
    if(this.alert) {
      this.themes.span.set('border-color', 'border-support-alert-50')
      this.themes.caption.set('color', 'text-support-alert-50')
    }
  }

  private getSizeRules(sizeComponent: RadioSizeComponentsEnum) {
    return this.sizes[this.size][sizeComponent]
  }

  buildStyleRules() {
    this.getAlertRules()

    const rules = {
      wrapperClass: [
        ...this.themes.wrapper.values(),
        ...this.getSizeRules('wrapper').values(),
        ...this.additionalClasses.wrapper
      ].join(' '),
      inputClass: [
        ...this.themes.input.values(),
        ...this.additionalClasses.input
      ].join(' '),
      spanWrapperClass: [
        ...this.themes.spanWrapper.values(),
        ...this.additionalClasses.spanWrapper
      ].join(' '),
      spanClass: [
        ...this.themes.span.values(),
        ...this.getSizeRules('span').values(),
        ...this.additionalClasses.span
      ].join(' '),
      sectionClass: [
        ...this.themes.section.values(),
        ...this.additionalClasses.section
      ].join(' '),
      labelClass: [
        ...this.themes.label.values(),
        ...this.getSizeRules('label').values(),
        ...this.additionalClasses.label
      ].join(' '),
      captionClass: [
        ...this.themes.caption.values(),
        ...this.getSizeRules('caption').values(),
        ...this.additionalClasses.caption
      ].join(' '),
    }

    return rules
  }
}
