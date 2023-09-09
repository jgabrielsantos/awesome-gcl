import React, { useEffect, useMemo, useState } from "react";
import { DataPropTypes, RowPropTypes, TablePropTypes } from "./types";
import * as Styled from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faSort } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "../Checkbox";

const renderRows = ({
  checkedArray,
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

  const rowMainOnClickHandler = () => {
    if(onRowClick) onRowClick(rowMemoed.row)
  }

  const checkboxOnClickHandler = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.stopPropagation()
    setChecked(!rowMemoed.checked)
  }

  useEffect(() => {
    setChecked(headerCheck)
  }, [headerCheck])

  useEffect(() => {
    rowMemoed.checked ?
    checkedArray?.push(rowMemoed) :
    checkedArray?.splice(rowMemoed.index, 1)

    checkedArray?.sort((a, b) => a.index - b.index)
  }, [rowMemoed.checked])

  return (
    <Styled.RowStyled
      id={`row-${rowMemoed.index.toString()}`}
      key={`row-${rowMemoed.index}`}
      >
      <Styled.RowMainStyled
        id={`${rowMemoed.index.toString()}-default`}
        key={`${rowMemoed.index}-default`}
        onClick={rowMainOnClickHandler}
        hasClickFunction={!!onRowClick}
      >
        {checkedArray && (
          <div>
            <Checkbox
              checked={rowMemoed.checked}
              handleClick={checkboxOnClickHandler}
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
  checkedArray,
  onRowClick,
  details,
  className,
}: TablePropTypes) => {
  const [headerCheck, setHeaderCheck] = useState(false)

  const onHeaderClickHandler = () => {
    setHeaderCheck(!headerCheck)
  }

  const headerCheckMemoed = useMemo(() => ({
    headerCheck
  }), [headerCheck])

  return (
    <Styled.TableStyled
      className={className}
    >
      <Styled.HeadStyled>
        <Styled.RowStyled
          isTableHeader
        >
          {checkedArray && (
            <th>
              <Checkbox
                checked={headerCheckMemoed.headerCheck}
                handleClick={onHeaderClickHandler}
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
          headerCheck: headerCheckMemoed.headerCheck,
          headers,
          row,
          index,
          onRowClick,
          details,
          checkedArray
        }))}
      </tbody>
    </Styled.TableStyled>
  )
}