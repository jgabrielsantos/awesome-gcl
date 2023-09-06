import React, { useEffect, useState } from "react";
import { RowPropTypes, TablePropTypes } from "./types";
import * as Styled from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSort } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "../Checkbox";
import { useTable } from "./hooks";

const renderRows = ({
  headers,
  headersCheck,
  row,
  index,
  checkbox
}: RowPropTypes) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    headersCheck ? setChecked(true) : setChecked(false)
  }, [headersCheck])

  return (
    <Styled.RowStyled
      id={index.toString()}
      key={index}
      onClick={() => console.log(`row ${index} was clicked`)}
    >
      {checkbox && (
        <td>
          <Checkbox
            checked={checked}
            handleClick={(event) => {
              event.stopPropagation()
              setChecked(!checked)
            }}
          />
        </td>
      )}
      {headers.map(header => (
        <Styled.DataStyled>
          {row[header.id]}
        </Styled.DataStyled>
      ))}
      {row.rowDetails && (
        <td>
          <FontAwesomeIcon
            onClick={(event) => {
              event.stopPropagation()
              console.log(`row ${index} expansion button was clicked`)
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
  loading
}: TablePropTypes) => {
  const hook = useTable({ data })

  return (
    <Styled.TableStyled>
      <Styled.HeadStyled>
        <Styled.RowStyled>
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
          checkbox
        }))}
      </tbody>
    </Styled.TableStyled>
  )
}