import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ToastComponentPropTypes } from "./types";
import { ToastStyles } from "./styles";

export const Toast = ({
  id,
  type,
  isOpen,
  handleClose,
  children,
  additionalClasses = []
}: Readonly<ToastComponentPropTypes>) => {
  const style = new ToastStyles(additionalClasses)
  const { toastClass } = style.buildStyleRules({ type, isOpen })

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