import React from "react"
import { HeaderStyles } from "./styles"
import { HeaderPropTypes } from "./types"

export const Header = ({
  id,
  label,
  additionalClasses
}: HeaderPropTypes) => {
  const styles = new HeaderStyles({ additionalClasses })
  const { headerClass, iconClass } = styles.buildStyleRules()

  return (
    <th
      className={headerClass}
      key={`header-${id}`}
    >
      {label}
      {/* <FontAwesomeIcon
        className={iconClass}
        onClick={() => console.log(`${id} was clicked`)}
        icon={faSort}
      /> */}
    </th>
  )
}
