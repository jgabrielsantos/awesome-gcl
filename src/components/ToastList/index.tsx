import React from "react";
import { ToastListComponentPropType } from "./types";
import { ToastListStyles } from "./styles";
import { Toast } from "./Components";

/**
 * Toast List component
 * @param {ToastListComponentPropType} props
 * @property {toastComponentPropTypes} props.toastList
 * @property {string[]} props.additionalClasses
 * @example
 * <ToastList
 *  toastList={[
 *    {
 *      id: 'success toast',
 *      isOpen: successToastOpen,
 *      handleClose: () => setSuccessToastOpen(false),
 *      useCase: 'success',
 *      children: <p>Success</p>,
 *    },
 *    {
 *      id: 'fail toast',
 *      isOpen: failToastOpen,
 *      handleClose: () => setFailToastOpen(false),
 *      useCase: 'fail',
 *      children: <p>Fail</p>,
 *    },
 *    {
 *      id: 'warning toast',
 *      isOpen: warningToastOpen,
 *      handleClose: () => setWarningToastOpen(false),
 *      useCase: 'warning',
 *      children: <p>Warning</p>,
 *    },
 *    {
 *      id: 'info toast',
 *      isOpen: infoToastOpen,
 *      handleClose: () => setInfoToastOpen(false),
 *      useCase: 'info',
 *      children: <p>Info</p>,
 *    },
 *  ]}
 * />
 * @returns {JSX.Element} ToastList
 */

export const ToastList = ({
  toastList,
  additionalClasses = []
}: Readonly<ToastListComponentPropType>): JSX.Element => {
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