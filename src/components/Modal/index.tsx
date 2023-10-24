import React from "react";
import { ModalPropTypes } from "./types";
import { ModalStyles } from "./styles";

export const Modal = ({
  isOpen,
  children,
  additionalClasses
}: ModalPropTypes) => {
  const styles = new ModalStyles({
    additionalClasses,
    isOpen
  })
  const { wrapperClass, dialogClass } = styles.buildStyleRules()

  return (
    <div
      className={wrapperClass}
      data-testid='modal-wrapper'
    >
      <dialog
        className={dialogClass}
        data-testid='modal-dialog'
      >
        {children}
      </dialog>
    </div>
  )
}
