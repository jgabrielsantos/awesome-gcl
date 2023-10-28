import { useEffect, useMemo, useState } from "react"
import { CheckboxClickPropTypes, RowClickPropTypes, CreateRowMemoPropTypes, UseRowPropTypes, UpdateRowMemoPropTypes, UpdateCheckedValuePropTypes } from "./types"

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

export const createRowMemo = ({
  row,
  index,
  checked
}: CreateRowMemoPropTypes) => () => ({
  row,
  index,
  checked
})

export const updateCheckedValue = ({
  headerCheck,
  setChecked
}: UpdateCheckedValuePropTypes) => () => {
  setChecked(headerCheck)
}

export const updateRowMemo = ({
  rowMemo,
  checkedArray
}: UpdateRowMemoPropTypes) => () => {
  rowMemo.checked ?
  checkedArray.push(rowMemo) :
  checkedArray.splice(rowMemo.index, 1)
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

  const rowMemo = useMemo(createRowMemo({
    row,
    index,
    checked
  }), [checked])

  useEffect(updateCheckedValue({
    headerCheck,
    setChecked
  }), [headerCheck])

  useEffect(updateRowMemo({
    rowMemo,
    checkedArray
  }), [rowMemo.checked])

  return {
    rowMemo,
    dataWrapperOnClickHandler: rowOnClick({onRowClick, row: rowMemo.row }),
    checkboxOnClickHandler: checkboxOnClick({ setChecked, checked: rowMemo.checked }),
    detailsOpen,
    setDetailsOpen
  }
}