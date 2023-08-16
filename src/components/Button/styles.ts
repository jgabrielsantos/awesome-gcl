import styled from 'styled-components';
import { ButtonComponentPropTypes } from './types';
import { toRem } from '../../utils';
import { colors } from '../../styles/theme';

/*
 * @param size          controls the font-size, line-height and padding
 * @param customTheme   controls the color, border and background color
 * @param disabled      controls the pointer, color, border and background color
 * @return              style to be used by the Button component`
 * @see                 Button
*/

type ButtonStylePropsTypes = Readonly<Pick<ButtonComponentPropTypes, 'size' | 'customTheme' | 'disabled'>>

export const ButtonStyled = styled.button.withConfig({
  shouldForwardProp: (prop) => !['customTheme'].includes(prop)
})<ButtonStylePropsTypes>`
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: ${toRem(6)};
  font-weight: 500;

  font-size: ${({ size }) => {
    switch (size) {
      case 'large':
        return toRem(16)
      case 'medium':
        return toRem(14)
      case 'small':
        return toRem(12)
    }
  }};

  line-height: ${({ size }) => {
    switch(size) {
      case 'large':
        return toRem(24)
      case 'medium':
        return toRem(20)
      case 'small':
        return toRem(16)
    }
  }};

  padding: ${({ size }) => {
    switch(size) {
      case 'large':
        return `${toRem(12)} ${toRem(24)}`
      case 'medium':
        return `${toRem(10)} ${toRem(20)}`
      case 'small':
        return `${toRem(8)} ${toRem(12)}`
    }
  }};

  border-width: 1px;
  border-style: solid;

  border-color: ${({ customTheme }) => {
    switch(customTheme) {
      case 'primary':
        return colors.primary[50]
      case 'secondary':
        return colors.primary[50]
      case 'tertiary':
        return colors.grayscale[40]
      case 'destructive-primary':
        return colors.support.alert[50]
      case 'destructive-secondary':
        return colors.support.alert[50]
      case 'success-primary':
        return colors.support.success[50]
      case 'success-secondary':
        return colors.support.success[50]
      case 'contrast-primary':
        return colors.primary[50]
      case 'contrast-secondary':
        return colors.white[100]
    }
  }};

  color: ${({ customTheme }) => {
    switch(customTheme) {
      case 'primary':
        return colors.white[100]
      case 'secondary':
        return colors.primary[50]
      case 'tertiary':
        return colors.grayscale[100]
      case 'destructive-primary':
        return colors.white[100]
      case 'destructive-secondary':
        return colors.support.alert[50]
      case 'success-primary':
        return colors.white[100]
      case 'success-secondary':
        return colors.support.success[50]
      case 'contrast-primary':
        return colors.primary[50]
      case 'contrast-secondary':
        return colors.white[100]
    }
  }};

  background-color: ${({ customTheme }) => {
    switch(customTheme) {
      case 'primary':
        return colors.primary[50]
      case 'secondary':
        return colors.white[100]
      case 'tertiary':
        return colors.white[100]
      case 'destructive-primary':
        return colors.support.alert[50]
      case 'destructive-secondary':
        return colors.white[100]
      case 'success-primary':
        return colors.support.success[50]
      case 'success-secondary':
        return colors.white[100]
      case 'contrast-primary':
        return colors.white[100]
      case 'contrast-secondary':
        return colors.grayscale[100]
    }
  }};

  &:hover {
    border-color: ${({ customTheme }) => {
      switch(customTheme) {
        case 'primary':
          return colors.primary[100]
        case 'secondary':
          return colors.primary[50]
        case 'tertiary':
          return colors.grayscale[100]
        case 'destructive-primary':
          return colors.support.alert[100]
        case 'destructive-secondary':
          return colors.support.alert[50]
        case 'success-primary':
          return colors.support.success[100]
        case 'success-secondary':
          return colors.support.success[50]
        case 'contrast-primary':
          return colors.primary[50]
        case 'contrast-secondary':
          return colors.white[100]
      }
    }};

    background-color: ${({ customTheme }) => {
      switch(customTheme) {
        case 'primary':
          return colors.primary[100]
        case 'secondary':
          return colors.primary[0]
        case 'tertiary':
          return colors.white[100]
        case 'destructive-primary':
          return colors.support.alert[100]
        case 'destructive-secondary':
          return colors.support.alert[5]
        case 'success-primary':
          return colors.support.success[100]
        case 'success-secondary':
          return colors.support.success[5]
        case 'contrast-primary':
          return colors.primary[0]
        case 'contrast-secondary':
          return colors.white[40]
      }
    }};
  }

  &:disabled {
    border-color: ${colors.grayscale[40]};

    color: ${colors.grayscale[60]};

    background-color: ${({ customTheme }) => customTheme?.includes('primary') ? colors.grayscale[5] : colors.white[100]};
  }
`;