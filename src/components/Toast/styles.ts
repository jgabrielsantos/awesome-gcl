import styled from "styled-components";
import { ToastComponentPropTypes } from "./types";
import { toRem } from "../../utils";
import { colors } from "../../styles";

export const WrapperStyled = styled.div`
  position: fixed;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${toRem(8)};
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
`

export const ToastStyled = styled.output.withConfig({
  shouldForwardProp: (prop) => !['isOpen', 'theme'].includes(prop)
})<Readonly<Pick<ToastComponentPropTypes, 'isOpen' | 'theme'>>>`
  width: fit-content;
  max-width: 760px;
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: space-between;
  padding: ${toRem(10)} ${toRem(12)};
  gap: ${toRem(6)};
  border-radius: ${toRem(6)};
  background-color: ${({ theme }) => {
    switch(theme) {
      case 'info':
        return colors.primary[5]
      case 'success':
        return colors.support.success[5]
      case 'fail':
        return colors.support.alert[5]
      case 'warning':
        return colors.support.warning[5]
    }
  }};
`

export const CloseButtonStyled = styled.button`
  padding: 0;
  cursor: pointer;
`