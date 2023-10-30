import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ToastComponentPropTypes } from "./types";
import { ToastStyles } from "./styles";

/**
 * Toast component
 * @param {ToastComponentPropTypes} props
 * @property {string} props.id
 * @property {ToastUseCaseEnums} props.useCase
 * @property {boolean} props.isOpen
 * @property {React.MouseEventHandler<SVGSVGElement>} props.handleClose
 * @property {ReactNode} props.children
 * @property {ToastAdditionalClassesPropTypes} props.additionalClasses
 * @property {string[]} props.additionalClasses.toast - CSS classes for toast output HTML tag
 * @example
 * <Toast
 *   id={'logout-alert'}
 *   useCase={info}
 *   isOpen={isToastOpen}
 *   handleClose={() => setIsToastOpen(false))}
 *   additionalClasses={{
 *    toast: ['dark-mode-color']
 *   }}
 * />
 * 
 * @returns {JSX.Element} Toast
 */

export const Toast = ({
  id,
  useCase,
  isOpen,
  handleClose,
  children,
  additionalClasses = {
    toast: []
  }
}: Readonly<ToastComponentPropTypes>): JSX.Element => {
  const style = new ToastStyles({additionalClasses, useCase, isOpen})
  const { toastClass } = style.buildStyleRules()

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