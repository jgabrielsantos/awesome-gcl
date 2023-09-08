import React, { useEffect, useMemo, useState } from "react";
import { DataPropTypes, RowPropTypes, TablePropTypes } from "./types";
import * as Styled from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faSort } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "../Checkbox";

const renderRows = ({
  checkbox,
  headers,
  headerCheck,
  row,
  index,
  onRowClick,
  onRowCheckboxChange,
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
    if(onRowClick) onRowClick(rowMemoed)
  }

  const checkboxOnClickHandler = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.stopPropagation()
    setChecked(!rowMemoed.checked)
  }

  useEffect(() => {
    setChecked(headerCheck)
  }, [headerCheck])

  useEffect(() => {
    if(onRowCheckboxChange) onRowCheckboxChange(rowMemoed)
  }, [checked])

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
        {checkbox && (
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
  checkbox,
  onRowClick,
  onRowCheckboxChange,
  details,
  className,
}: TablePropTypes) => {
  const [headerCheck, setHeaderCheck] = useState(false)

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
                checked={headerCheck}
                handleClick={() => {
                  setHeaderCheck(!headerCheck)
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
          headerCheck,
          headers,
          row,
          index,
          onRowClick,
          onRowCheckboxChange,
          details,
          checkbox
        }))}
      </tbody>
    </Styled.TableStyled>
  )
}