import { FigureAdditionalClassesPropTypes, FigureComponentEnums } from "./types";
import Themes from './themes'

interface FigureStyle {
  getThemeRules: (components: FigureComponentEnums) => Map<string, string>
  buildStyleRules: () => Record<string, string>
}

export class FigureStyles implements FigureStyle {
  private additionalClasses: FigureAdditionalClassesPropTypes
  private themes: Record<FigureComponentEnums, Map<string, string>> = {
    figure: Themes.figure(),
    image: Themes.image(),
    caption: Themes.caption()
  }

  constructor({ figure, image, caption }: FigureAdditionalClassesPropTypes) {
    this.additionalClasses = {
      figure,
      image,
      caption
    }
  }

  getThemeRules(components: FigureComponentEnums) {
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