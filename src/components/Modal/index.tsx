import React from "react";
import * as Styled from './styles'
import { ModalPropTypes } from "./types";

export const Modal = ({
  isOpen,
  children,
  className
}: ModalPropTypes) => (
  <Styled.ModalStyled
    isOpen={isOpen}
    className={className}
    data-testid='modal'
  >
    {children}
  </Styled.ModalStyled>
)