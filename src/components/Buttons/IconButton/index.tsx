import React from 'react'
import { IconButtonStyles } from './styles'
import { IconButtonComponentPropTypes } from './types'

export const IconButton = ({
  children,
  type,
  size,
  theme,
  handleClick,
  disabled = false,
  additionalClasses
}: Readonly<IconButtonComponentPropTypes>) => {
  const styles = new IconButtonStyles({
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
