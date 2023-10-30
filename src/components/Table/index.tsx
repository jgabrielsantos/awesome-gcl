import React, { useMemo, useState } from "react";
import { TablePropTypes } from "./types";
import { Checkbox } from "../Checkbox";
import { Header, Row } from "./Components";
import { TableStyles } from "./styles";

/**
 * Table Row component
 * 
 * @param {TablePropTypes} props
 * @property {HeaderPropTypes[]} headers - Determines what data should be rendered based on the header
 * @property {DataPropTypes[]} data - First-level table data information
 * @property {function} [onRowClick] - Function to retrieve row information
 * @param {DataPropTypes} onRowClick.row - Row clicked
 * @property {DataPropTypes[]} checkedArray - Determines which rows change a marked checkbox
 * @property {function} [details] - Function to render a ReactNode based on the row information
 * @param {DataPropTypes} details.row - Row clicked
 * @property {number} index - Determines if all rows have the marked checkbox
 * @property {TableAdditionalClassesPropTypes} [props.additionalClasses] - Object for additional css classes to each HTML tah
 * @property {string[]} [additionalClasses.header] - CSS classes for header-{id} th HTML tag
 * @property {string[]} [additionalClasses.row] - CSS classes for row tr HTML tag
 * @property {string[]} [additionalClasses.dataWrapper] - CSS classes for data wrapper td HTML tag
 * @property {string[]} [additionalClasses.data] - CSS classes for data div th HTML tag
 * @property {string[]} [additionalClasses.details] - CSS classes for details td HTML tag
 * @property {string[]} [additionalClasses.iconWrapper] - CSS classes for icon wrapper div th HTML tag
 * @property {string[]} [additionalClasses.table] - CSS classes for table HTML tag
 * @property {string[]} [additionalClasses.tableHead] - CSS classes for thead HTML tag
 * @property {string[]} [additionalClasses.headerRow] - CSS classes for tr HTML tag
 * @property {string[]} [additionalClasses.hiddenIconRep] - CSS classes for table header div HTML tag
 * @example
 * type TableRowType = Record<string, any> & {
 *  details?: any
 * }
 * 
 * <Table 
 *  headers={[
 *    {
 *      id: 'name',
 *      label: 'Name'
 *    },
 *    {
 *      id: 'rank',
 *      label: 'Rank'
 *    },
 *    {
 *      id: 'lightsaberColor',
 *      label: 'Lightsaber Color'
 *    },
 *  ]}
 *  data={[
 *    {
 *      name: 'Obi-wan',
 *      rank: 'Master',
 *      lightsaberColor: 'Blue',
 *      details: 'Anakin\'s master'
 *    },
 *    {
 *      name: 'Yoda',
 *      rank: 'Master',
 *      lightsaberColor: 'Green',
 *      details: 'Jedi Master'
 *    },
 *    {
 *      name: 'Anakin',
 *      rank: 'Master',
 *      lightsaberColor: 'Red',
 *      details: 'Luke\'s father'
 *     }
 *  ]}
 *  checkedArray={[]}
 *  onRowClick={(row: TableRowType) => console.log(row)}
 *  details={(row: TableRowType) => (
 *    <p>{row.details}</p>
 *  )}
 *  additionalClasses={{
 *    header: ['font-size-large'],
 *    row: ['gray-background'],
 *    dataWrapper: ['red-background'],
 *    data: ['large-font-size'],
 *    details: ['yellow-background'],
 *    iconWrapper: ['blue-border'],
 *    table: ['width-twice'],
 *    tableHead: ['light-gray-background'],
 *    headerRow: ['medium-padding'],
 *    hiddenIconRep: ['width-0']
 *  }}
 * />
 * 
 * @returns {JSX.Element} - Table
 */

export const Table = ({
  headers,
  data,
  checkedArray,
  onRowClick,
  details,
  additionalClasses
}: TablePropTypes) => {
  const styles = new TableStyles({
    additionalClasses
  })
  const {
    tableClass,
    tableHeadClass,
    headerRowClass,
    hiddenIconRepClass
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
            <Header
              key={header.id}
              id={header.id}
              label={header.label}
              additionalClasses={{
                header: additionalClasses?.header || [],
                icon: additionalClasses?.icon || []
              }}
            />
          ))}
          {details && (
            <th>
              <div
                className={hiddenIconRepClass}
              />
            </th>
          )}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <Row
            key={index}
            headerCheck={headerCheckMemoed.headerCheck}
            headers={headers}
            row={row}
            index={index}
            onRowClick={onRowClick}
            details={details}
            checkedArray={checkedArray}
            additionalClasses={{
              row: additionalClasses?.row || [],
              dataWrapper: additionalClasses?.dataWrapper || [],
              data: additionalClasses?.data || [],
              details: additionalClasses?.details || [],
              iconWrapper: additionalClasses?.iconWrapper || []
            }}
          />
        ))}
      </tbody>
    </table>
  )
}