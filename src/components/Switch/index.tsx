import React from "react";
import { SwitchPropTypes } from "./types";
import { SwitchStyles } from "./styles";

/**
 * Switch component
 * @param {SwitchPropTypes} props
 * @property {string} [props.label]
 * @property {GSizeEnum} props.size
 * @property {boolean} props.checked
 * @property {function} props.handleClick
 * @property {SwitchAdditionalClassesPropTypes} props.additionalClasses
 * 
 * @returns {JSX.Element} Switch
 */

export const Switch = ({
  size,
  checked,
  handleClick,
  label,
  disabled,
  additionalClasses
}: SwitchPropTypes): JSX.Element => {
  const styles = new SwitchStyles({
    size,
    disabled,
    additionalClasses
  })
  const {
    wrapperClass,
    labelClass,
    switchWrapperClass,
    inputClass,
    spanClass
  } = styles.buildStyleRules()

  return (
    <div
      className={wrapperClass}
      onClick={handleClick}
    >
      {label !== undefined && (
        <label
          className={labelClass}
        >
          {label}
        </label>
      )}
      <label
        className={switchWrapperClass}
      >
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          readOnly
          className={inputClass}
        />
        <span
          className={spanClass}
        />
      </label>
    </div>
  )
}