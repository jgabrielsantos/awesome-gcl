import React from "react";
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
          key={toast.id}
          id={toast.id}
          useCase={toast.useCase}
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