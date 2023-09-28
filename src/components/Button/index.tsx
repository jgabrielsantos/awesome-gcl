import React from 'react'
import { themes } from './styles'
import { ButtonComponentPropTypes } from './types'

export const Button = ({
  children,
  type = 'button',
  size = 'medium',
  theme = 'primary',
  handleClick,
  disabled = false,
  className
}: Readonly<ButtonComponentPropTypes>) => (
  <button
    type={type}
    // size={size}
    // customTheme={customTheme}
    onClick={handleClick}
    disabled={disabled}
    className={`${themes[theme].join(" ")}`}
    data-testid='awesome-gcl-button-component'
  >
    {children}
  </button>
)