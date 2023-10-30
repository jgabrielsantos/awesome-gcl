import React from "react"
import { InputPropTypes } from "./types"
import { useInput } from "./hooks"
import { InputStyles } from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

/**
 * Input component
 * @WARNING Be cautious when passing a pattern to the input as this value is exposed and can lead to a security breach
 * 
 * @param {Object} props
 * @property {InputTypesEnum} props.type - Defines the input HTML tag type
 * @property {string} props.value - Defines input's value
 * @property {function} props.onChange - Function to be triggered when value is changed
 * @param {React.ChangeEvent<HTMLInputElement>} props.onChange.event
 * @property {function} [props.onKeyDown] - Function to be triggered when a specific key is pressed
 * @param {React.KeyboardEvent<HTMLInputElement>} props.onChange.event
 * @property {string} [props.label] - Determines the value of label and if it should be rendered
 * @property {string} [props.caption] - Determines the value of caption and if it should be rendered
 * @property {string} [props.placeholder] - Determines the value of placeholder and if it should be rendered
 * @property {boolean} [props.showPassword] - Determines the button type is text or password to hide its value. Also changes the icon rendered
 * @property {boolean} [props.disabled] - Defines the input background color and disable functions
 * @property {string} [props.pattern] - Determines the input's regex pattern
 * @note pattern will be accepted only if it's a valid RegEx
 * @property {GSizeEnum} props.size - Determines the label, input and caption font size, input padding, password button position 
 * @property {InputAdditionalClassesPropTypes} [props.additionalClasses] - Object for additional css classes to each HTML tag
 * @property {string[]} [additionalClasses.wrapper] - CSS classes for input-wrapper div HTML tag
 * @property {string[]} [additionalClasses.label] - CSS classes for input-label label HTML tag
 * @property {string[]} [additionalClasses.inputWrapper] - CSS classes for input-input-wrapper div HTML tag
 * @property {string[]} [additionalClasses.input] - CSS classes for input-input input HTML tag
 * @property {string[]} [additionalClasses.passwordIcon] - CSS classes for input-password-icon button HTML tag
 * @property {string[]} [additionalClasses.caption] - CSS classes for input-caption p HTML tag
 * 
 * @example
 * <Input
 *  type='password'
 *  value={inputValue}
 *  onChange={(event) => setInputValue(e.target.value)}
 *  onKeyPress={(event) => window.alert('Input Key pressed')}
 *  label='Password'
 *  caption='password must be 8 characters long'
 *  placeholder='Password'
 *  showPassword={true}
 *  disabled={false}
 *  pattern='^[a-zA-Z0-9]*$'
 *  size='medium'
 *  additionalClasses = {{
 *    wrapper: ['flex-justify-end'],
 *    label: ['large-font-size'],
 *    inputWrapper: ['gray-background'],
 *    input: ['half-width'],
 *    passwordButton: ['gray-color'],
 *    caption: ['medium-font-size'],
 *  }}
 * />
 * 
 * @returns {JSX.Element} Input
 */

export const Input = ({
  type,
  value,
  onChange,
  onKeyDown,
  label,
  caption,
  placeholder,
  showPassword = false,
  disabled = false,
  pattern,
  size,
  additionalClasses
}: Readonly<InputPropTypes>) => {
  const hook = useInput({ type, showPassword })
  const styles = new InputStyles({
    additionalClasses,
    size
  })
  const {
    wrapperClass,
    labelClass,
    inputWrapperClass,
    inputClass,
    passwordButtonClass,
    captionClass
  } = styles.buildStyleRules()

  if (pattern)
  try {
    new RegExp(pattern)
  } catch (e) {
    throw new Error('Pattern not acceptable. Please provide a valid regular expression (RegEx)')
  }

  return (
    <div
      className={wrapperClass}
      data-testid='input-wrapper'
    >
      {label && (
        <label
          className={labelClass}
          data-testid='input-label'
        >
          {label}
        </label>
      )}
      <div
        className={inputWrapperClass}
        data-testid='input-password-wrapper'
      >
        <input
          type={hook.hookType}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          pattern={pattern}
          className={inputClass}
          data-testid='input-input'
        />
        {type === 'password' && (
          <button
            onClick={hook.hookSetPasswordVisible}
            className={passwordButtonClass}
            data-testid='input-password-icon'
          >
            <FontAwesomeIcon
              icon={hook.hookPasswordVisible? faEye : faEyeSlash}
              data-testid='input-password-font-awesome-icon'
            />
          </button>
        )}
      </div>
      {caption && (
        <p
          className={captionClass}
          data-testid='input-caption'
        >
          {caption}
        </p>
      )}
    </div>
  )
}