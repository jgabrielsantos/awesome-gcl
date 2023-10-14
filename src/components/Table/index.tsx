import React, { useMemo, useState } from "react";
import { TablePropTypes } from "./types";
import { Checkbox } from "../Checkbox";
import { Headers, Rows } from "./Components";
import { TableStyles } from "./styles";

export const Table = ({
  headers,
  data,
  checkedArray,
  onRowClick,
  details,
  additionalClasses = {
    table: [],
    tableHead: [],
    headerRow: [],
    hiddenIconRep: [],
    header: [],
    row: [],
    dataWrapper: [],
    data: [],
    details: [],
    iconWrapper: [],
    icon: []
  },
}: TablePropTypes) => {
  const styles = new TableStyles(additionalClasses)
  const {
    tableClass,
    tableHeadClass,
    headerRowClass,
    hiddenIconRepCLass
  } = styles.buildStyleRules()
  const [headerCheck, setHeaderCheck] = useState(false)

  const onHeaderClickHandler = () => {
    setHeaderCheck(!headerCheck)
  }

  const headerCheckMemoed = useMemo(() => ({
    headerCheck
  }), [headerCheck])

  return (
    <table
      className={tableClass}
    >
      <thead
        className={tableHeadClass}
      >
        <tr
          className={headerRowClass}
        >
          {checkedArray && (
            <th>
              <Checkbox
                size="medium"
                checked={headerCheckMemoed.headerCheck}
                handleClick={onHeaderClickHandler}
              />
            </th>
          )}
          {headers.map(header => (
            <Headers
              id={header.id}
              label={header.label}
              additionalClasses={{
                header: additionalClasses.header,
                icon: additionalClasses.icon
              }}
            />
          ))}
          {details && (
            <th>
              <div
                className={hiddenIconRepCLass}
              />
            </th>
          )}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <Rows
            headerCheck={headerCheckMemoed.headerCheck}
            headers={headers}
            row={row}
            index={index}
            onRowClick={onRowClick}
            details={details}
            checkedArray={checkedArray}
            additionalClasses={{
              row: additionalClasses.row,
              dataWrapper: additionalClasses.dataWrapper,
              data: additionalClasses.data,
              details: additionalClasses.details,
              iconWrapper: additionalClasses.iconWrapper
            }}
          />
        ))}
      </tbody>
    </table>
  )
}