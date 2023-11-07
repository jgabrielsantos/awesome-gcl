import React from "react";
import { RadioPropTypes } from "./types";
import { RadioStyles } from "./styles";

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
}: RadioPropTypes) => {
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
    <div id={id} className={wrapperClass} onClick={disabled ? undefined : () => handleClick(id)}>
      <div className={spanWrapperClass}>
        <input type="checkbox" checked={checked} disabled={disabled} className={inputClass} readOnly />
        <span className={spanClass} />
      </div>
      {label !== undefined && (
        <section className={sectionClass}>
          <label className={labelClass}>
            {label}
          </label>
          {caption !== undefined && (
            <caption className={captionClass}>
              {caption}
            </caption>
          )}
        </section>
      )}
    </div>
  )
}
