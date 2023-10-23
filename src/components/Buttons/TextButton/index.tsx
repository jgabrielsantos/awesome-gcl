import React from 'react'
import { TextButtonStyles } from './styles'
import { TextButtonComponentPropTypes } from './types'

export const TextButton = ({
  children,
  type,
  size,
  theme,
  handleClick,
  disabled = false,
  additionalClasses
}: Readonly<TextButtonComponentPropTypes>) => {
  const styles = new TextButtonStyles({
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
