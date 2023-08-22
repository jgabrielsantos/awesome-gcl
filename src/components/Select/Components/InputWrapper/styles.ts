import styled from "styled-components";
import { InputWrapperPropTypes } from "./types";
import { colors } from "../../../../styles";
import { toRem } from "../../../../utils";

export const InputWrapperStyled = styled.div<Readonly<Pick<InputWrapperPropTypes, 'disabled'>>>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${colors.grayscale[40]};
  border-radius: ${toRem(6)};
  padding: ${toRem(12)} ${toRem(16)};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  background-color: ${({ disabled }) => disabled ? colors.grayscale[0] : colors.white[100]};
`