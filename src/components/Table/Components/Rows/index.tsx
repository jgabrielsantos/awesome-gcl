import React from "react";
import { RowPropTypes } from "./types";
import { RowStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "../../../Checkbox";
import { useRows } from "./logic";

export const Row = ({
  checkedArray,
  headers,
  headerCheck,
  row,
  index,
  onRowClick,
  details,
  additionalClasses
}: RowPropTypes) => {
  const hook = useRows({
    row,
    index,
    onRowClick,
    headerCheck,
    checkedArray
  })

  const styles = new RowStyles({
    additionalClasses,
    hasClickFunction: !!onRowClick,
    isOpen: hook.detailsOpen
  })
  const {
    rowClass,
    dataWrapperClass,
    dataClass,
    iconWrapperClass,
    detailsClass
  } = styles.buildStyleRules()

  return (
    <tr
      id={`row-${hook.rowMemo.index.toString()}`}
      key={`row-${hook.rowMemo.index}`}
      className={rowClass}
    >
      <td
        id={`${hook.rowMemo.index.toString()}-default`}
        key={`${hook.rowMemo.index}-default`}
        onClick={hook.dataWrapperOnClickHandler}
        className={dataWrapperClass}
      >
        {checkedArray && (
          <div>
            <Checkbox
              size='medium'
              checked={hook.rowMemo.checked}
              handleClick={hook.checkboxOnClickHandler}
            />
          </div>
        )}
        {headers.map(header => (
          <div
            className={dataClass}
            key={`${hook.rowMemo.index}-data-${header.id}`}
          >
            {hook.rowMemo.row[header.id]}
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
        id={`${hook.rowMemo.index.toString()}-details`}
        key={`${hook.rowMemo.index}-details`}
        className={detailsClass}
      >
        {details && details(row)}
      </td>
    </tr>
  )
}