import { FigureComponentEnums, FigureConstructorPropTypes } from "./types";
import Themes from './themes'

interface FigureStyle {
  buildStyleRules: () => Record<`${FigureComponentEnums}Class`, string>
}

export class FigureStyles implements FigureStyle {
  private additionalClasses: {
    figure: string[]
    image: string[]
    caption: string[]
  }
  private themes: Record<FigureComponentEnums, Map<string, string>> = {
    figure: Themes.figure(),
    image: Themes.image(),
    caption: Themes.caption()
  }

  constructor({ additionalClasses }: FigureConstructorPropTypes) {
    this.additionalClasses = {
      figure: additionalClasses?.figure || [],
      image: additionalClasses?.image || [],
      caption: additionalClasses?.caption || []
    }
  }

  private getThemeRules(components: FigureComponentEnums) {
    return this.themes[components]
  }

  buildStyleRules() {
    const classes = {
      figureClass: [
        ...this.getThemeRules('figure').values(),
        ...this.additionalClasses.figure
      ].join(' '),
      imageClass: [
        ...this.getThemeRules('image').values(),
        ...this.additionalClasses.image
      ].join(' '),
      captionClass: [
        ...this.getThemeRules('caption').values(),
        ...this.additionalClasses.caption
      ].join(' ')
    }

    return classes
  }
}