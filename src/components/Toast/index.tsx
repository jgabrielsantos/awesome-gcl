import React from "react";
import * as Styled from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ToastWrapperPropType } from "./types";

export const Toast = ({
  toasts
}: Readonly<ToastWrapperPropType>) => (
  <Styled.WrapperStyled>
    {toasts.map((toast, index) => (
      <Styled.ToastStyled
        key={index}
        name={toast.name}
        theme={toast.theme}
        isOpen={toast.isOpen}
        className={toast.className}
        data-testid='toast-wrapper'
      >
        {toast.children}
        <Styled.CloseButtonStyled
          onClick={toast.handleClose}
          data-testid='toast-close-button'
        >
          <FontAwesomeIcon
            icon={faTimes}
            data-testid='toast-close-icon'
          />
        </Styled.CloseButtonStyled>
      </Styled.ToastStyled>
    ))}
  </Styled.WrapperStyled>
)