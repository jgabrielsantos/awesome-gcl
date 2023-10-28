import React from "react";
import { FigureStyles } from './styles'
import { FigurePropTypes } from './types'

/**
 * Figure component
 * 
 * @param {FigurePropTypes} props
 * @property {string} props.src - Img HTML tag src value
 * @property {string} props.alt - Img HTML tag alt value
 * @property {string} [props.caption] - Determines the value of figcaption and if it should be rendered
 * @property {FigureAdditionalClassesPropTypes} [props.additionalClasses] - Object for additional css classes to each HTML tah
 * @property {string[]} [additionalClasses.figure] - CSS classes for figure-wrapper figure HTML tag
 * @property {string[]} [additionalClasses.image] - CSS classes for figure-image img HTML tag
 * @property {string[]} [additionalClasses.caption] - CSS classes for figure-figcaption HTML tag
 * @example
 * <Figure
 *  src='https://cctech.io/images/cctech-logo-black.webp'
 *  alt='Convergence Concepts Logo'
 *  caption='Convergence'
 *  additionalClasses = {{
 *    figure: ['max-width'],
 *    image: ['half-size'],
 *    caption: ['colr-gray'],
 *  }}
 * />
 * 
 * @returns {JSX.Element} - Figure
 */

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
  )
}
