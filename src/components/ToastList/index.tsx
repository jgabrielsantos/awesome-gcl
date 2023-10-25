import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ToastListComponentPropType } from "./types";
import { ToastListStyles } from "./styles";
import { Toast } from "./Components";

export const ToastList = ({
  toastList,
  additionalClasses = []
}: Readonly<ToastListComponentPropType>) => {
  const style = new ToastListStyles(additionalClasses)
  const { wrapperClass } = style.buildStyleRules()

  return (
    <div
      className={wrapperClass}
      data-testid='toast-wrapper'
    >
      {toastList.map((toast) => (
        <Toast
          id={toast.id}
          type={toast.type}
          isOpen={toast.isOpen}
          handleClose={toast.handleClose}
          additionalClasses={toast.additionalClasses}
        >
          {toast.children}
        </Toast>
      ))}
    </div>
  )
}