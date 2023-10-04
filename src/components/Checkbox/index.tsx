import React from "react";
import { CheckboxStyles } from './styles'
import { CheckboxPropTypes } from './types'

export const Checkbox = ({
  checked,
  size,
  handleClick,
  disabled = false,
  label,
  error,
  additionalClasses = {
    wrapper: [],
    label: [],
    input: []
  }
}: CheckboxPropTypes) => {
  const styles = new CheckboxStyles(additionalClasses)
  const { wrapperClass, inputClass, labelClass } = styles.buildStyleRules({ size, checked })

  return (
    <div
      data-testid='checkbox-wrapper'
      className={wrapperClass}
    >
      <input
        id='checkbox-component'
        data-testid='checkbox-input'
        type="checkbox"
        checked={checked}
        onClick={handleClick}
        disabled={disabled}
        readOnly
        className={inputClass}
      />
      {label && (
        <label
          data-testid='checkbox-label'
          className={labelClass}
        >
          {label}
        </label>
      )}
    </div>
  )
}