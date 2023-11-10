import React from "react"
import { TagStyles } from "./styles"
import { TagPropTypes } from "./types"

/**
 * Tag component
 * @param {TagPropTypes} props
 * @property {GSizeEnum} props.size
 * @property {ReactNode} props.children
 * @property {TagAdditionalClassesPropTypes} [props.additionalClasses]
 * @property {string[]} [props.additionalClasses.wrapper]
 * @property {string[]} [props.additionalClasses.children]
 * @example
 * <Tag
 *    size='medium'
 *    additionalClasses={{
 *      wrapper: ['wrapper-custom-style'],
 *      children: ['children-custom-style']
 *    }}
 * >
 *  On hold
 * </Tag>
 */

export const Tag = ({
  size,
  children,
  additionalClasses
}: TagPropTypes) => {
  const styles = new TagStyles({
    size,
    additionalClasses
  })

  const {
    wrapperClass,
    childrenClass
  } = styles.buildStyleRules()

  return (
    <div className={wrapperClass}>
      <div className={childrenClass}>
        {children}
      </div>
    </div>
  )
}