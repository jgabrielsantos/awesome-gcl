import { useEffect, useMemo, useState } from "react"
import { CheckboxClickPropTypes, RowClickPropTypes, UseRowPropTypes } from "./types"

export const rowOnClick = ({
  onRowClick,
  row
}: RowClickPropTypes) => () => {
  if(onRowClick) onRowClick(row)
}

export const checkboxOnClick = ({
  setChecked,
  checked
}: CheckboxClickPropTypes) => (event: React.MouseEvent<Element, MouseEvent>) => {
  event.stopPropagation()
  setChecked(!checked)
}

export const useRows = ({
  row,
  index,
  onRowClick,
  headerCheck,
  checkedArray
}: UseRowPropTypes) => {
  const [checked, setChecked] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(false)

  const rowMemoed = useMemo(() => ({
    row,
    index,
    checked
  }), [checked])

  useEffect(() => {
    setChecked(headerCheck)
  }, [headerCheck])

  useEffect(() => {
    rowMemoed.checked ?
    checkedArray?.push(rowMemoed) :
    checkedArray?.splice(rowMemoed.index, 1)
    
    checkedArray?.sort((a, b) => a.index - b.index)
  }, [rowMemoed.checked])

  return {
    rowMemoed,
    dataWrapperOnClickHandler: rowOnClick({onRowClick, row: rowMemoed.row }),
    checkboxOnClickHandler: checkboxOnClick({ setChecked, checked: rowMemoed.checked }),
    detailsOpen,
    setDetailsOpen
  }
}