export type FigureComponentEnums = 'figure'
| 'image'
| 'caption'

export type FigureAdditionalClassesPropTypes = {
  figure: string[]
  image: string[]
  caption: string[]
}

export type FigurePropTypes = {
  src: string
  alt: string
  caption?: string
  additionalClasses?: FigureAdditionalClassesPropTypes
}