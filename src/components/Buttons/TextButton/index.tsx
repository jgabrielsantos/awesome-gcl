import React from 'react'
import { ButtonStyles } from './styles'
import { ButtonComponentPropTypes } from './types'

export const TextButton = ({
  children,
  type,
  size,
  theme,
  handleClick,
  disabled = false,
  additionalClasses = []
}: Readonly<ButtonComponentPropTypes>) => {
  const styles = new ButtonStyles(additionalClasses)
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
