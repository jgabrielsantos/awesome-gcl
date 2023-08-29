import React from "react";
import * as Styled from './styles'
import { CheckboxPropTypes } from './types'
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Checkbox = ({
  checked,
  handleClick,
  disabled,
  description,
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
      data-testid='checkbox-input'
    />
    <Styled.IconStyled
      onClick={handleClick}
      checked={checked}
      icon={faCheck}
      data-testid='checkbox-icon'
    />
    {description && (
      <Styled.DescriptionStyled
        data-testid='checkbox-description'
      >
        {description}
      </Styled.DescriptionStyled>
    )}
  </Styled.Wrapper>
)