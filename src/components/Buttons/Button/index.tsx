import React from 'react'
import { ButtonStyles } from './styles'
import { ButtonComponentPropTypes } from './types'

/**
 * Button component
 * 
 * @param {ButtonComponentPropTypes} props
 * @property {ReactNode} props.children
 * @property {ButtonTypesEnum} props.type - Defines the button type
 * @property {GSizeEnum} props.size - Defines padding and font-size
 * @property {ButtonThemesEnum} props.theme - Defines background color, border and text color
 * @property {React.MouseEventHandler<HTMLButtonElement>} props.handleClick - Function triggered by Mouse Evenet
 * @property {boolean} [props.disabled] - Blocks Mouse Event and change background-color
 * @property {ButtonAdditionalClassesPropTypes} [props.additionalClasses] - Object for additional css classes to each HTML tag
 * @property {string[]} [additionalClasses.button] - CSS classes for button div HTML tag
 * @example
 * <Button
 *  type='button'
 *  size='medium'
 *  theme='primary'
 *  handleClick={() => window.alert('Awesome GCL button was clicked')}
 *  disabled={false}
 *  additionalClasses={{
 *    button: ['button-custom-border']
 *  }}
 * >
 *  Click me!
 * </Button>
 * 
 * @returns {JSX.Element} Button
 */

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
