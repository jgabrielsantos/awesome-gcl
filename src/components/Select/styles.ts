import styled from "styled-components";
import { toRem } from "../../utils";
import { colors } from "../../styles";
import { InputWrapperPropTypes, SelectOptionListPropTypes } from "./types";

export const WrapperStyled = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${toRem(8)};
`

export const LabelStyled = styled.label`
  font-size: 1rem;
  width: 100%;
  line-height: 1.5;
  color: ${colors.grayscale[100]};
`

export const InputWrapperStyled = styled.div<Readonly<InputWrapperPropTypes>>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${colors.grayscale[40]};
  border-radius: ${toRem(6)};
  padding: ${toRem(12)} ${toRem(16)};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  background-color: ${({ disabled }) => disabled ? colors.grayscale[100] : colors.white[100]};
`

export const InputStyled = styled.input`
  cursor: pointer;
  color: ${colors.grayscale[100]};
  font-size: 1rem;
  border: none;
`

export const OptionListStyled = styled.ul.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop)
})<Readonly<SelectOptionListPropTypes>>`
  width: 100%;
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${toRem(8)};
  border: 1px solid ${colors.grayscale[40]};
  border-radius: ${toRem(8)};
  padding: ${toRem(8)} ${toRem(10)};
  position: absolute;
  right: 0;
  top: 80px;
`

export const OptionItemStyled = styled.li`
  cursor: pointer;
  width: 100%;
  color: ${colors.grayscale[100]};
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`