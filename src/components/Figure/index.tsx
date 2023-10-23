import React from "react";
import { FigureStyles } from './styles'
import { FigurePropTypes } from './types'

export const Figure = ({
  src,
  alt,
  caption,
  additionalClasses = {
    figure: [],
    image: [],
    caption: []
  }
}: Readonly<FigurePropTypes>) => {
  const styles = new FigureStyles({ additionalClasses })
  const { figureClass, imageClass, captionClass} = styles.buildStyleRules()

  return (
  <figure
    className={figureClass}
    data-testid='figure-wrapper'
  >
    <img
      src={src}
      alt={alt}
      className={imageClass}
      data-testid='figure-image'
    />
    {caption && (
      <figcaption
        className={captionClass}
        data-testid='figure-caption'
      >
        {caption}
      </figcaption>
    )}
  </figure>
)}