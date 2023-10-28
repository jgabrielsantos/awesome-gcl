import React from 'react'
import { IconButtonStyles } from './styles'
import { IconButtonComponentPropTypes } from './types'

/**
 * Icon Button component
 * 
 * @param {IconButtonComponentPropTypes} props
 * @property {*} props.children
 * @property {IconButtonTypesEnum} props.type - Defines the button type
 * @property {GSizeEnum} props.size - Defines padding and font-size
 * @property {IconButtonThemesEnum} props.theme - Defines background color, border and text color
 * @property {React.MouseEventHandler<HTMLButtonElement>} props.handleClick - Function triggered by Mouse Evenet
 * @property {boolean} [props.disabled] - Blocks Mouse Event and change background-color
 * @property {IconButtonAdditionalClassesPropTypes} [props.additionalClasses] - Object for additional css classes to each HTML tag
 * @property {string[]} [additionalClasses.button] - CSS classes for button div HTML tag
 * @example
 * <IconButton
 *  type='button'
 *  size='medium'
 *  theme='primary'
 *  handleClick={() => window.alert('Awesome GCL button was clicked')}
 *  disabled={false}
 *  additionalClasses={{
 *    button: ['button-custom-border']
 *  }}
 * >
 *  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
 *    <path fillRule="evenodd" clipRule="evenodd" d="M5.91006 10.4959L3.7071 8.29291C3.31658 7.90239 2.68342 7.90239 2.29289 8.29291C1.90237 8.68343 1.90237 9.3166 2.29289 9.70712L5.29288 12.7071C5.7168 13.131 6.4159 13.0892 6.7863 12.6178L13.7863 4.61786C14.1275 4.18359 14.0521 3.55494 13.6178 3.21372C13.1835 2.87251 12.5549 2.94795 12.2136 3.38222L5.91006 10.4959Z" fill="white"/>
 *  </svg>
 * </IconButton>
 * 
 * @returns {JSX.Element} Icon Button
 */

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
