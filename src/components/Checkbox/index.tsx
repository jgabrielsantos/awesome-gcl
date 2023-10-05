import React from "react";
import { CheckboxStyles } from './styles'
import { CheckboxPropTypes } from './types'

export const Checkbox = ({
  checked,
  size,
  handleClick,
  disabled = false,
  label,
  additionalClasses = {
    wrapper: [],
    label: [],
    icon: [],
    input: []
  }
}: CheckboxPropTypes) => {
  const styles = new CheckboxStyles(additionalClasses)
  const { wrapperClass, inputClass, labelClass, iconClass } = styles.buildStyleRules({ size })

  return (
    <div
      data-testid='checkbox-wrapper'
      onClick={handleClick}
      className={wrapperClass}
    >
      <input
        id='checkbox-component'
        data-testid='checkbox-input'
        type="checkbox"
        checked={checked}
        disabled={disabled}
        className={inputClass}
        readOnly
      />
      {checked && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className={iconClass}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.91006 10.4959L3.7071 8.29291C3.31658 7.90239 2.68342 7.90239 2.29289 8.29291C1.90237 8.68343 1.90237 9.3166 2.29289 9.70712L5.29288 12.7071C5.7168 13.131 6.4159 13.0892 6.7863 12.6178L13.7863 4.61786C14.1275 4.18359 14.0521 3.55494 13.6178 3.21372C13.1835 2.87251 12.5549 2.94795 12.2136 3.38222L5.91006 10.4959Z" fill="white"/>
        </svg>
      )}
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