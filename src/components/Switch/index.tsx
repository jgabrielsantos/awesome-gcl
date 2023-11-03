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
 * @example
 * <Switch
 *   size='medium'
 *   checked={isChecked}
 *   handleClick={() => setIsChecked(!isChecked)}
 *   label='Switch component'
 *   disabled={isDataLoading}
 *   additionalClasses={
 *      wrapper: ['wrapper-additional-class'],
 *      label: ['label-additional-class'],
 *      switchwrapper: ['switchwrapper-additional-class'],
 *      input: ['input-additional-class'],
 *      span: ['span-additional-class'],
 *   }
 * />
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
      onClick={disabled ? undefined : handleClick}
      className={wrapperClass}
      data-testid='switch-wrapper'
    >
      {label !== undefined && (
        <label
          data-testid='switch-label'
          className={labelClass}
        >
          {label}
        </label>
      )}
      <div
        className={switchWrapperClass}
      >
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          readOnly
          className={inputClass}
        />
        <div
          className={spanClass}
        />
      </div>
    </div>
  )
}