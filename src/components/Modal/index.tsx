import React from "react";
import { ModalPropTypes } from "./types";
import { ModalStyles } from "./styles";

/**
 * Modal component
 * 
 * @param {ModalPropTypes} props
 * @property {boolean} props.isOpen - Determines if modal is visible to user
 * @property {ReactNode} children
 * @property {ModalAdditionalClassesPropTypes} [props.additionalClasses] - Object for additional css classes to each HTML tag
 * @property {string[]} [additionalClasses.wrapper] - CSS classes for modal-wrapper div HTML tag
 * @property {string[]} [additionalClasses.dialog] - CSS classes for modal-dialog dialog HTML tag
 * @example
 * <Modal
 *  isOpen={true}
 *  additionalClasses = {{
 *    wrapper: ['custom-background-color'],
 *    dialog: ['large-font-size']
 *   }}
 * >
 *  <p>Modal information</p>
 * </Modal>
 * 
 * @returns {JSX.Element} Modal
 */

export const Modal = ({
  isOpen,
  children,
  additionalClasses
}: ModalPropTypes): JSX.Element => {
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
