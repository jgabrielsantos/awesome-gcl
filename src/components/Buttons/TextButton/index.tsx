import React from 'react'
import { TextButtonStyles } from './styles'
import { TextButtonComponentPropTypes } from './types'

/**
 * Text Button component
 * 
 * @param {TextButtonComponentPropTypes} props
 * @property {ReactNode} props.children
 * @property {TextButtonTypesEnum} props.type - Defines the button type
 * @property {GSizeEnum} props.size - Defines padding and font-size
 * @property {TextButtonThemesEnum} props.theme - Defines background color, border and text color
 * @property {React.MouseEventHandler<HTMLButtonElement>} props.handleClick - Function triggered by Mouse Evenet
 * @property {boolean} [props.disabled] - Blocks Mouse Event and change background-color
 * @property {boolean} [props.name]
 * @property {boolean} [props.value]
 * @property {TextButtonAdditionalClassesPropTypes} [props.additionalClasses] - Object for additional css classes to each HTML tag
 * @property {string[]} [additionalClasses.button] - CSS classes for button div HTML tag
 * @example
 * <TextButton
 *  type='button'
 *  size='medium'
 *  theme='primary'
 *  handleClick={() => window.alert('Awesome GCL button was clicked')}
 *  disabled={false}
 *  name='buttonIdentifier'
 *  value='clicked'
 *  additionalClasses={{
 *    button: ['button-custom-border']
 *  }}
 * >
 *  Click me!
 * </TextButton>
 * 
 * @returns {JSX.Element} Text Button
 */

export const TextButton = ({
  children,
  type,
  size,
  theme,
  handleClick,
  disabled = false,
  name,
  value,
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
      name={name}
      value={value}
      className={buttonClass}
      data-testid='awesome-gcl-button-component'
    >
      {children}
    </button>
  )
}
