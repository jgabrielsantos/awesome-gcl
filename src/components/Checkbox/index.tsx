import React from "react";
import * as Styled from './styles'
import { CheckboxPropTypes } from './types'
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Checkbox = ({
  checked,
  handleClick,
  disabled = false,
  label,
  className
}: CheckboxPropTypes) => (
  <Styled.Wrapper
    className={className}
    data-testid='checkbox-wrapper'
  >
    <Styled.InputStyled
      type="checkbox"
      checked={checked}
      onClick={handleClick}
      disabled={disabled}
      readOnly
      data-testid='checkbox-input'
    />
    {checked && (
      <Styled.IconStyled
        onClick={handleClick}
        icon={faCheck}
        data-testid='checkbox-icon'
      />
    )}
    {label && (
      <Styled.LabelStyled
        data-testid='checkbox-label'
      >
        {label}
      </Styled.LabelStyled>
    )}
  </Styled.Wrapper>
)