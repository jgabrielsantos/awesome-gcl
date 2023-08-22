import React from "react";
import * as Styled from './styles'
import { InputWrapperPropTypes } from "./types";

export const InputWrapper = ({
  disabled,
  onClick,
  children
}: Readonly<InputWrapperPropTypes>) => disabled ?
  (
    <Styled.InputWrapperStyled
      disabled={disabled}
      data-testid='select-input-wrapper'
    >
      {children}
    </Styled.InputWrapperStyled>
  ) : (
    <Styled.InputWrapperStyled
      onClick={onClick}
      disabled={disabled}
      data-testid='select-input-wrapper'
    >
      {children}
    </Styled.InputWrapperStyled>
  )
