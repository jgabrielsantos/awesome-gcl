import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { StyledPropTypes } from "./types";
import { colors } from "../../styles";
import { toRem } from "../../utils";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${toRem(6)};
  position: relative;
`

export const InputStyled = styled.input<StyledPropTypes>`
  width: ${toRem(20)};
  height: ${toRem(20)};
  border: 1px solid ${({ checked }) => checked ? colors.primary[50] : colors.grayscale[40]};
  border-radius: ${toRem(4)};
  background-color: ${({ checked }) => checked ? colors.primary[50] : colors.white[100]};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    border: 1px solid ${colors.grayscale[40]};
    background-color: ${colors.grayscale[40]};
  }
`

export const IconStyled = styled(FontAwesomeIcon)`
  width: ${toRem(16)};
  display: flex;
  color: ${colors.white[100]};
  position: absolute;
  left: 2px;
  cursor: pointer;
`

export const LabelStyled = styled.label`
  font-size: 1rem;
`