import { GSizeEnum } from "../types";
import Themes from "./themes";
import Sizes from "./sizes";
import { TagComponentsEnum, TagConstructorPropTypes } from "./types";

interface ITagStyles {
  buildStyleRules: () => Record<`${TagComponentsEnum}Class`, string>
}

export class TagStyles implements ITagStyles {
  private size: GSizeEnum
  private sizes: Record<GSizeEnum, Record<TagComponentsEnum, Map<string, string>>> = {
    large: Sizes.large(),
    medium: Sizes.medium(),
    small: Sizes.small()
  }
  private themes: Record<TagComponentsEnum, Map<string, string>> = {
    wrapper: Themes.wrapper(),
    children: Themes.children()
  }
  private additionalClasses: {
    wrapper: string[]
    children: string[]
  }

  constructor({
    size,
    additionalClasses
  } : TagConstructorPropTypes) {
    this.size =  size
    this.additionalClasses = {
      wrapper: additionalClasses?.wrapper || [],
      children: additionalClasses?.children || []
    }
  }

  private getSizeRules(component: TagComponentsEnum) {
    return this.sizes[this.size][component]
  }

  buildStyleRules() {
    const rules = {
      wrapperClass: [
        ...this.themes.wrapper.values(),
        ...this.getSizeRules('wrapper').values(),
        ...this.additionalClasses.wrapper
      ].join(' '),
      childrenClass: [
        ...this.themes.children.values(),
        ...this.getSizeRules('children').values(),
        ...this.additionalClasses.children
      ].join(' ')
    }

    return rules
  }
}
