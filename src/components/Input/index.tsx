import React from "react"
import * as Styled from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { InputPropTypes } from "./types"

export const Input = ({
  type = 'text',
  value,
  onChange,
  onKeyDown,
  label,
  placeholder,
  error = false,
  errorMessage,
  showPassword = false,
  disabled = false,
  pattern,
  className
}: Readonly<InputPropTypes>) => {
  return (
    <Styled.WrapperStyled
      className={className}
      data-testid='input-wrapper'
    >
      {label && (
        <Styled.LabelStyled
          data-testid='input-label'
        >
          {label}
        </Styled.LabelStyled>
      )}
      <Styled.InputWrapperStyled
        error={error}
        disabled={disabled}
        data-testid='input-input-wrapper'
      >
        <Styled.InputStyled
          type={type}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          pattern={pattern}
          data-testid='input-input'
        />
        {type === 'password' && (
          <Styled.PasswordIconStyled
            onClick={() => null}
            data-testid='input-password-icon'
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </Styled.PasswordIconStyled>
        )}
      </Styled.InputWrapperStyled>
      {error && errorMessage && (
        <Styled.ErrorMessageStyled
          data-testid='input-error-message'
        >
          {errorMessage}
        </Styled.ErrorMessageStyled>
      )}
    </Styled.WrapperStyled>
  )
}