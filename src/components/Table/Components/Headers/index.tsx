import React from "react"
import { HeaderStyles } from "./styles"
import { HeaderPropTypes } from "./types"

export const Headers = ({
  id,
  label,
  additionalClasses = {
    header: [],
    icon: []
  }
}: HeaderPropTypes) => {
  const styles = new HeaderStyles(additionalClasses)
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