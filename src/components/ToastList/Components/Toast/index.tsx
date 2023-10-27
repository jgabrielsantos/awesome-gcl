import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ToastComponentPropTypes } from "./types";
import { ToastStyles } from "./styles";

export const Toast = ({
  id,
  useCase,
  isOpen,
  handleClose,
  children,
  additionalClasses = {
    toast: []
  }
}: Readonly<ToastComponentPropTypes>) => {
  const style = new ToastStyles({additionalClasses, useCase, isOpen})
  const { toastClass } = style.buildStyleRules()
  console.log(toastClass)

  return (
    <output
      key={id}
      id={id}
      className={toastClass}
      data-testid={`toast-${id}`}
    >
      {children}
      <FontAwesomeIcon
        icon={faTimes}
        onClick={handleClose}
        data-testid={`toast-close-icon-${id}`}
      />
    </output>
  )
}