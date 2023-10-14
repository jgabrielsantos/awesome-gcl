import React from "react";
import { RowPropTypes } from "./types";
import { RowStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "../../../Checkbox";
import { useRows } from "./logic";

export const Rows = ({
  checkedArray,
  headers,
  headerCheck,
  row,
  index,
  onRowClick,
  details,
  additionalClasses = {
    row: [],
    dataWrapper: [],
    data: [],
    details: [],
    iconWrapper: []
  }
}: RowPropTypes) => {
  const hook = useRows({
    row,
    index,
    onRowClick,
    headerCheck,
    checkedArray
  })

  const styles = new RowStyles(additionalClasses)
  const {
    rowClass,
    dataWrapperClass,
    dataClass,
    iconWrapperClass,
    detailsClass
  } = styles.buildStyleRules({
    hasClickFunction: !!onRowClick,
    isOpen: hook.detailsOpen
  })

  return (
    <tr
      id={`row-${hook.rowMemoed.index.toString()}`}
      key={`row-${hook.rowMemoed.index}`}
      className={rowClass}
    >
      <td
        id={`${hook.rowMemoed.index.toString()}-default`}
        key={`${hook.rowMemoed.index}-default`}
        onClick={hook.dataWrapperOnClickHandler}
        // hasClickFunction={!!onRowClick}
        className={dataWrapperClass}
      >
        {checkedArray && (
          <div>
            <Checkbox
              size='medium'
              checked={hook.rowMemoed.checked}
              handleClick={hook.checkboxOnClickHandler}
            />
          </div>
        )}
        {headers.map(header => (
          <div
            className={dataClass}
            key={`${hook.rowMemoed.index}-data-${header.id}`}
          >
            {hook.rowMemoed.row[header.id]}
          </div>
        ))}
        <div
          className={iconWrapperClass}
          onClick={(event) => {
            event.stopPropagation()
            hook.setDetailsOpen(!hook.detailsOpen)
          }}
        >
          {details && (
            <FontAwesomeIcon
              icon={hook.detailsOpen ? faChevronUp : faChevronDown}
            />
          )}
        </div>
      </td>
      <td
        id={`${hook.rowMemoed.index.toString()}-details`}
        key={`${hook.rowMemoed.index}-details`}
        className={detailsClass}
      >
        {details && details(row)}
      </td>
    </tr>
  )
}