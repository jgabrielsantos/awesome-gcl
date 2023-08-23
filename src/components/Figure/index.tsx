import React from "react";
import * as Styled from './styles'
import { FigurePropTypes } from './types'

export const Figure = ({
  src,
  alt,
  caption,
  width,
  height,
  className
}: Readonly<FigurePropTypes>) => (
  <Styled.WrapperStyled
    className={className}
    width={width}
    height={height}
    data-testid='figure-wrapper'
  >
    <Styled.ImageStyled
      src={src}
      alt={alt}
      data-testid='figure-image'
    />
    {caption && (
      <Styled.CaptionStyled
        data-testid='figure-caption'
      >
        {caption}
      </Styled.CaptionStyled>
    )}
  </Styled.WrapperStyled>
)