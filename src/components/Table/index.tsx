import React, { useEffect, useMemo, useState } from "react";
import { RowPropTypes, TablePropTypes } from "./types";
import * as Styled from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faSort } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "../Checkbox";
import { useTable } from "./hooks";

const renderRows = ({
  checkbox,
  headers,
  headerCheck,
  row,
  index,
  onRowClick,
  details,
}: RowPropTypes) => {
  const [checked, setChecked] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(false)

  const rowMemoed = useMemo(() => ({
    row,
    index,
    checked
  }), [checked])

  const onClickHandler = () => {
    if(onRowClick) onRowClick(rowMemoed.row)
  }

  useEffect(() => {
    setChecked(headerCheck)
  }, [headerCheck])

  return (
    <Styled.RowStyled
      id={`row-${rowMemoed.index.toString()}`}
      key={`row-${rowMemoed.index}`}
      >
      <Styled.RowMainStyled
        id={`${rowMemoed.index.toString()}-default`}
        key={`${rowMemoed.index}-default`}
        onClick={onClickHandler}
        hasClickFunction={!!onRowClick}
      >
        {checkbox && (
          <div>
            <Checkbox
              checked={rowMemoed.checked}
              handleClick={(event) => {
                event.stopPropagation()
                setChecked(!rowMemoed.checked)
              }}
            />
          </div>
        )}
        {headers.map(header => (
          <Styled.DataStyled
            key={`${rowMemoed.index}-data-${header.id}`}
          >
            {rowMemoed.row[header.id]}
          </Styled.DataStyled>
        ))}
        <Styled.IconWrapper
          onClick={(event) => {
            event.stopPropagation()
            setDetailsOpen(!detailsOpen)
          }}
        >
          {details && (
            <FontAwesomeIcon
              icon={detailsOpen ? faChevronUp : faChevronDown}
            />
          )}
        </Styled.IconWrapper>
      </Styled.RowMainStyled>
      <Styled.RowDetailStyled
        className="row-details"
        id={`${rowMemoed.index.toString()}-details`}
        key={`${rowMemoed.index}-details`}
        isOpen={detailsOpen}
        onClick={() => setDetailsOpen(false)}
      >
        {details && details(row)}
      </Styled.RowDetailStyled>
    </Styled.RowStyled>
  )
}

export const Table = ({
  headers,
  data,
  checkbox,
  onRowClick,
  details,
  className,
}: TablePropTypes) => {
  const hook = useTable()

  return (
    <Styled.TableStyled
      className={className}
    >
      <Styled.HeadStyled>
        <Styled.RowStyled
          isTableHeader
        >
          {checkbox && (
            <th>
              <Checkbox
                checked={hook.hookHeaderCheck}
                handleClick={() => {
                  hook.hookSetHeaderCheck(!hook.hookHeaderCheck)
                }}
              />
            </th>
          )}
          {headers.map(header => (
            <Styled.HeaderStyled
              key={`header-${header.id}`}
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
          headerCheck: hook.hookHeaderCheck,
          headers,
          row,
          index,
          onRowClick,
          details,
          checkbox
        }))}
      </tbody>
    </Styled.TableStyled>
  )
}