import React from "react";
import { CheckboxStyles } from './styles'
import { CheckboxPropTypes } from './types'

/**
 * Checkbox component
 * 
 * @param {CheckboxPropTypes} props
 * @property {boolean} props.checked - Determines whether the component should render the mark icon
 * @property {GSizeEnum} props.size - Defines input and icon sizes and label font size
 * @property {React.MouseEventHandler<HTMLDivElement>} [props.handleClick] - Wrapper onClick function
 * @property {boolean} [props.disabled = false] - Defines the checkbox background-color and disable function
 * @property {string} [props.label] - Determines the value of label and if it should be rendered
 * @property {CheckboxAdditionalClassesPropTypes} [props.additionalClasses] - Object for additional css classes to each HTML tag
 * @property {string[]} [additionalClasses.wrapper] - CSS classes for checkbox-wrapper div HTML tag
 * @property {string[]} [additionalClasses.input] - CSS classes for checkbox-input input HTML tag
 * @property {string[]} [additionalClasses.label] - CSS classes for checkbox-label label HTML tag
 * @property {string[]} [additionalClasses.icon] - CSS classes for checkbox-mark svg HTML tag
 * @example
 * <Checkbox
 *  checked={isChecked}
 *  size='medium'
 *  handleClick={() => setIsChecked(!isChecked)}
 *  disabled={false}
 *  additionalClasses = {{
 *    wrapper: ['custom-background-color'],
 *    input: ['custom-input-border'],
 *    label: ['large-font-size'],
 *    icon: ['custom-background-constrast'],
 *   }}
 * />
 * 
 * @returns {Checkbox} JXS Element
 */

export const Checkbox = ({
  checked,
  size,
  handleClick,
  disabled = false,
  label,
  additionalClasses
}: CheckboxPropTypes) => {
  const styles = new CheckboxStyles({
    additionalClasses,
    size
  })
  const { wrapperClass, inputClass, labelClass, iconClass } = styles.buildStyleRules()

  return (
    <div
      data-testid='checkbox-wrapper'
      onClick={handleClick || undefined}
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
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
        data-testid='checkbox-mark'
        className={iconClass}
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M5.91006 10.4959L3.7071 8.29291C3.31658 7.90239 2.68342 7.90239 2.29289 8.29291C1.90237 8.68343 1.90237 9.3166 2.29289 9.70712L5.29288 12.7071C5.7168 13.131 6.4159 13.0892 6.7863 12.6178L13.7863 4.61786C14.1275 4.18359 14.0521 3.55494 13.6178 3.21372C13.1835 2.87251 12.5549 2.94795 12.2136 3.38222L5.91006 10.4959Z" fill="white"/>
        </svg>
      )}
      {label !== undefined && (
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