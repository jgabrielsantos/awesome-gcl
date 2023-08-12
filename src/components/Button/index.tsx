import React from 'react'
import * as Styled from './styles'
import { ButtonComponentPropTypes } from './types'

export const Button = ({
  children,
  type = 'button',
  size = 'medium',
  customTheme = 'primary',
  handleClick,
  disabled = false,
  className
}: Readonly<ButtonComponentPropTypes>) => (
  <Styled.ButtonStyled
    type={type}
    size={size}
    customTheme={customTheme}
    onClick={handleClick}
    disabled={disabled}
    className={className}
  >
    {children}
  </Styled.ButtonStyled>
)