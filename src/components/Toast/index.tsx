import React from "react";
import * as Styled from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ToastWrapperPropType } from "./types";

export const Toast = ({
  toastList
}: Readonly<ToastWrapperPropType>) => {
  return (
    <Styled.WrapperStyled
      data-testid='toast-wrapper'
    >
      {toastList.map((toast, index) => (
        <Styled.ToastStyled
          key={index}
          id={toast.id}
          theme={toast.theme}
          isOpen={toast.isOpen}
          className={toast.className}
          data-testid={`toast-${toast.id}`}
        >
          {toast.children}
          <Styled.CloseButtonStyled
            onClick={toast.handleClose}
            data-testid={`toast-close-button-${toast.id}`}
          >
            <FontAwesomeIcon
              icon={faTimes}
              data-testid={`toast-close-icon-${toast.id}`}
            />
          </Styled.CloseButtonStyled>
        </Styled.ToastStyled>
      ))}
    </Styled.WrapperStyled>
  )
}