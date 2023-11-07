import React from "react";
import { RadioPropTypes } from "./types";
import { RadioStyles } from "./styles";

/**
 * Radio component
 * @param {RadioPropTypes} props
 * @property {string} props.id
 * @property {GsizeEnums} props.size
 * @property {boolean} props.checked
 * @property {function} props.handleClick
 * @param {string} props.handleClick.id
 * @property {string} [props.label] - Determines label value and if it should be rendered
 * @property {string} [props.caption] - Determines caption value and if it should be rendered
 * @property {boolean} [props.alert]
 * @property {boolean} [props.disabled] - Prop passed to checkbox input and used to determine css rules
 * @property {RadioAdditionalClassesPropTypes} [props.additionalClasses]
 * @property {string[]} [props.additionalClasses.wrapper]
 * @property {string[]} [props.additionalClasses.input]
 * @property {string[]} [props.additionalClasses.spanWrapper]
 * @property {string[]} [props.additionalClasses.span]
 * @property {string[]} [props.additionalClasses.section]
 * @property {string[]} [props.additionalClasses.label]
 * @property {string[]} [props.additionalClasses.caption]
 * @example
 * <Radio
 *    id=''
 *    size=''
 *    checked=''
 *    handleClick=''
 *    label=''
 *    caption=''
 *    alert=''
 *    disabled=''
 *    additionalClasses={
 *      wrapper: ['wrapper-custom-class'],
 *      input: ['input-custom-class'],
 *      spanWrapper: ['spanWrapper-custom-class'],
 *      span: ['span-custom-class'],
 *      section: ['section-custom-class'],
 *      label: ['label-custom-class'],
 *      caption: ['caption-custom-class'],
 *    }
 * />
 * 
 * @returns {JSX.Element} Radio
 */

export const Radio = ({
  id,
  size,
  checked,
  handleClick,
  label,
  caption,
  alert,
  disabled,
  additionalClasses
}: RadioPropTypes): JSX.Element => {
  const styles = new RadioStyles({
    size,
    alert,
    additionalClasses
  })
  const {
    wrapperClass,
    inputClass,
    spanWrapperClass,
    spanClass,
    sectionClass,
    labelClass,
    captionClass
  } = styles.buildStyleRules()

  return (
    <div
      id={id}
      onClick={disabled ? undefined : () => handleClick(id)}
      className={wrapperClass}
      data-testid='radio-wrapper'
    >
      <div className={spanWrapperClass}>
        <input type="checkbox" checked={checked} disabled={disabled} className={inputClass} readOnly />
        <span className={spanClass} />
      </div>
      {label !== undefined && (
        <section className={sectionClass}>
          <label
            className={labelClass}
            data-testid='radio-label'
          >
            {label}
          </label>
          {caption !== undefined && (
            <label
              className={captionClass}
              data-testid='radio-caption'
            >
              {caption}
            </label>
          )}
        </section>
      )}
    </div>
  )
}
