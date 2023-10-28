import React from "react"
import { HeaderStyles } from "./styles"
import { HeaderPropTypes } from "./types"

/**
 * Table Header component
 * 
 * @param {HeaderPropTypes} props
 * @property {string} props.id
 * @property {string} props.label
 * @property {HeaderAdditionalClassesPropTypes} [props.additionalClasses] - Object for additional css classes to each HTML tah
 * @property {string[]} [additionalClasses.header] - CSS classes for header-{id} th HTML tag
 * @example
 * <Header
 *  id='name'
 *  label='User Name'
 * />
 * 
 * @returns {JSX.Element} - Header
 */

export const Header = ({
  id,
  label,
  additionalClasses
}: HeaderPropTypes): JSX.Element => {
  const styles = new HeaderStyles({ additionalClasses })
  const { headerClass, iconClass } = styles.buildStyleRules()

  return (
    <th
      className={headerClass}
      key={`header-${id}`}
    >
      {label}
    </th>
  )
}
