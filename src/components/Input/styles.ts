import styled from "styled-components";
import { toRem } from "../../utils";
import { colors } from "../../styles";
import { InputStyledPropTypes, InputWrapperStyledPropTypes } from "./types";

export const WrapperStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${toRem(6)};
`

export const LabelStyled = styled.label`
  width: 100%;
  color: ${colors.grayscale[100]};
  font-size: 1rem;
`

export const InputWrapperStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !['error'].includes(prop)
})<InputWrapperStyledPropTypes>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${toRem(8)};
  padding: ${toRem(12)} ${toRem(16)};
  border-radius: ${toRem(6)};
  border: 1px solid ${({ error }) => error ? colors.support.alert[50] : colors.grayscale[40]};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'text'};
  background-color: ${({ disabled }) => disabled ? colors.grayscale[5] : colors.white[100]};

  &:focus-within {
    border-color: ${colors.primary[50]}
  }
`

export const InputStyled = styled.input<InputStyledPropTypes>`
  width: 100%;
  color: ${colors.grayscale[80]};
  font-size: 1rem;
  border: none;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'text'};

  ::placeholder {
    color: ${colors.grayscale[40]};
  }

  &:disabled {
    color: ${colors.grayscale[60]};
  }
`

export const PasswordIconStyled = styled.button`
  cursor: pointer;
`

export const ErrorMessageStyled = styled.span`
  font-size: 1rem;
  color: ${colors.support.alert[50]};
`