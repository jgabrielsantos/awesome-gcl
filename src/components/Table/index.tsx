import React, { useEffect, useMemo, useState } from "react";
import { RowPropTypes, TablePropTypes } from "./types";
import * as Styled from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSort } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "../Checkbox";
import { useTable } from "./hooks";

const renderRows = ({
  checkbox,
  headers,
  headersCheck,
  row,
  index,
  onRowClick,
}: RowPropTypes) => {
  const [checked, setChecked] = useState(false)

  const rowMemoed = useMemo(() => ({
    row,
    index,
    checked
  }), [checked])

  useEffect(() => {
    headersCheck ? setChecked(true) : setChecked(false)
  }, [headersCheck])

  return (
    <Styled.RowStyled
      id={rowMemoed.index.toString()}
      key={rowMemoed.index}
      onClick={onRowClick ? () => onRowClick(row) : undefined}
      hasClickFunction={!!onRowClick}
    >
      {checkbox && (
        <td>
          <Checkbox
            checked={rowMemoed.checked}
            handleClick={(event) => {
              event.stopPropagation()
              setChecked(!rowMemoed.checked)
            }}
          />
        </td>
      )}
      {headers.map(header => (
        <Styled.DataStyled>
          {rowMemoed.row[header.id]}
        </Styled.DataStyled>
      ))}
      {rowMemoed.row.rowDetails && (
        <td>
          <FontAwesomeIcon
            onClick={(event) => {
              event.stopPropagation()
              console.log(`row ${rowMemoed.index} expansion button was clicked`)
            }}
            icon={faPlus}
          />
        </td>
      )}
    </Styled.RowStyled>
  )
}

export const Table = ({
  headers,
  data,
  checkbox,
  onRowClick,
  loading,
}: TablePropTypes) => {
  const hook = useTable()

  return (
    <Styled.TableStyled>
      <Styled.HeadStyled>
        <Styled.RowStyled
          hasClickFunction={false}
        >
          {checkbox && (
            <th>
              <Checkbox
                checked={hook.hookHeaderCheck}
                handleClick={hook.hookSetHeaderCheck}
              />
            </th>
          )}
          {headers.map(header => (
            <Styled.HeaderStyled
              key={header.id}
            >
              {header.label}
              <Styled.IconStyled
                onClick={() => console.log(`${header.id} was clicked`)}
                icon={faSort}
              />
            </Styled.HeaderStyled>
          ))}
        </Styled.RowStyled>
      </Styled.HeadStyled>

      <tbody>
        {data.map((row, index) => renderRows({
          headersCheck: hook.hookHeaderCheck,
          headers,
          row,
          index,
          onRowClick,
          checkbox
        }))}
      </tbody>
    </Styled.TableStyled>
  )
}