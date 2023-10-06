import React from "react"
import { InputPropTypes } from "./types"
import { useInput } from "./hooks"
import { InputStyles } from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

export const Input = ({
  type = 'text',
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
  additionalClasses={
    wrapper: [],
    label: [],
    input: [],
    passwordButton: [],
    caption: []
  }
}: Readonly<InputPropTypes>) => {
  const hook = useInput({ type, showPassword })
  const styles = new InputStyles(additionalClasses)
  const {
    wrapperClass,
    labelClass,
    inputWrapperClass,
    inputClass,
    passwordButtonClass,
    captionClass
  } = styles.buildStyleRules({ size })

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
          data-testid='input-error-message'
        >
          {caption}
        </p>
      )}
    </div>
  )
}