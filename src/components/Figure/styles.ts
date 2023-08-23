import styled from "styled-components";
import { FigurePropTypes } from "./types";

export const WrapperStyled = styled.figure<Readonly<Pick<FigurePropTypes, 'width' | 'height'>>>`
  width: ${({ width }) => width || '100%' };
  height: ${({ height }) => height || '100%' };
`

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
`

export const CaptionStyled = styled.figcaption`
  font-size: 1rem;
`