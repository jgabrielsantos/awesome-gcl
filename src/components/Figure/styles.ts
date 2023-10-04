import { FigureAdditionalClassesPropTypes } from "./types";
import Themes from './themes'

interface FigureStyle {
  buildStyleRules: () => Record<string, string>
}

export class FigureStyles implements FigureStyle {
  private additionalClasses: FigureAdditionalClassesPropTypes

  constructor({ figure, image, caption }: FigureAdditionalClassesPropTypes) {
    this.additionalClasses = {
      figure,
      image,
      caption
    }
  }

  buildStyleRules() {
    const classes = {
      figureClass: [
        ...Themes.figureRule().values(),
        ...this.additionalClasses.figure
      ].join(' '),
      imageClass: [
        ...Themes.imageRule().values(),
        ...this.additionalClasses.image
      ].join(' '),
      captionClass: [
        ...Themes.captionRule().values(),
        ...this.additionalClasses.caption
      ].join(' ')
    }

    return classes
  }
}