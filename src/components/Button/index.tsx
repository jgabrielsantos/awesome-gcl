import React from 'react'
import { ButtonStyles } from './styles'
import { ButtonComponentPropTypes } from './types'

export const Button = ({
  children,
  type,
  size,
  theme,
  handleClick,
  disabled = false,
}: Readonly<ButtonComponentPropTypes>) => {
  const styles = new ButtonStyles()
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={styles.buildStyleRules({theme, size})}
      data-testid='awesome-gcl-button-component'
    >
      {children}
    </button>
  )
}
