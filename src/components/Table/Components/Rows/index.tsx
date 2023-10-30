import React from "react";
import { RowPropTypes } from "./types";
import { RowStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "../../../Checkbox";
import { useRows } from "./logic";

/**
 * Table Row component
 * 
 * @param {RowPropTypes} props
 * @property {DataPropTypes[]} checkedArray - Determines which rows change a marked checkbox
 * @property {HeaderPropTypes[]} headers - Determines what data should be rendered based on the header
 * @property {boolean} headerChecked - Determines if all rows have the marked checkbox
 * @property {DataPropTypes} row - Information to be passed
 * @property {number} index - Determines if all rows have the marked checkbox
 * @property {function} onRowClick - Function to retrieve row information
 * @param {DataPropTypes} onRowClick.row - Row clicked
 * @property {function} details - Function to render a ReactNode based on the row information
 * @param {DataPropTypes} details.row - Row clicked
 * @property {RowAdditionalClassesPropTypes} [props.additionalClasses] - Object for additional css classes to each HTML tah
 * @property {string[]} [additionalClasses.row] - CSS classes for row tr HTML tag
 * @property {string[]} [additionalClasses.dataWrapper] - CSS classes for data wrapper td HTML tag
 * @property {string[]} [additionalClasses.data] - CSS classes for data div th HTML tag
 * @property {string[]} [additionalClasses.details] - CSS classes for details td HTML tag
 * @property {string[]} [additionalClasses.iconWrapper] - CSS classes for icon wrapper div th HTML tag
 * @example
 * <Row
 *  checkedArray={[]}
 *  headers={[
 *    {
 *      id: 'name',
 *      label: 'User Name'
 *    },
 *    {
 *      id: 'email',
 *      label: 'User Email'
 *    },
 *    {
 *      id: 'phone',
 *      label: 'Phone Number'
 *    },
 *  ]}
 *  headerCheck={false}
 *  row={
 *   {
 *     name: 'Joao',
 *     email: 'joao@email.com',
 *     phone: '6046004574',
 *     details: 'Details'
 *   }
 *  }
 *  index={0}
 *  onRowClick={(row) => window.alert(`${row.name} row`)}
 *  details={(row: TableRowType) => (
 *    <p>
 *      {`${row.name}-${row.details}`}
 *    </p>
 *  )}
 *  additionalClasses={{
 *    row: ['gray-background'],
 *    dataWrapper: ['red-background'],
 *    data: ['large-font-size'],
 *    details: ['yellow-background'],
 *    iconWrapper: ['blue-border']
 *  }}
 * />
 * 
 * @returns {JSX.Element} - Row
 */

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