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
  additionalClasses
}: Readonly<ButtonComponentPropTypes>) => {
  const styles = new ButtonStyles({
    additionalClasses,
    theme,
    size
  })
  const { buttonClass } = styles.buildStyleRules()

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={buttonClass}
      data-testid='awesome-gcl-button-component'
    >
      {children}
    </button>
  )
}
