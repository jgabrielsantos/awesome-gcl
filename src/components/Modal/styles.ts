import styled from "styled-components";
import { colors } from "../../styles";
import { ModalStyledPropTypes } from "./types";
import { toRem } from "../../utils";

export const ModalStyled = styled.dialog.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop)
})<ModalStyledPropTypes>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.grayscale[10]};
  border-radius: ${toRem(6)};
`