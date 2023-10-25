import React from "react"
import { checkboxOnClick, createRowMemo, rowOnClick, updateCheckedValue, updateRowMemo, useRows } from "../../../../src/components/Table/Components/Rows/logic"
import { DataPropTypes } from "../../../../src/components/Table/Components/Rows/types"
import { renderHook } from "@testing-library/react"

describe('rowOnClick', () => {
  let sut: ReturnType<typeof rowOnClick>

  const rowOnClickSpy = jest.fn()
  const rowMock: DataPropTypes = {
    id: 0
  }

  describe('Defined function', () => {
    beforeAll(() => {
      sut = rowOnClick({
        onRowClick: rowOnClickSpy,
        row: rowMock
      })
    })

    it('Should call function with correct param', () => {
      sut()

      expect(rowOnClickSpy).toBeCalledTimes(1)
      expect(rowOnClickSpy).toBeCalledWith(rowMock)
    })
  })

  describe('Undefined function', () => {
    beforeAll(() => {
      sut = rowOnClick({
        row: rowMock
      })
    })

    it('Should not call function', () => {
      sut()

      expect(rowOnClickSpy).toBeCalledTimes(0)
    })
  })
})

describe('checkboxOnClick', () => {
  let sut: ReturnType<typeof checkboxOnClick>

  const setCheckedSpy = jest.fn()
  const checkedMock = false

  beforeAll(() => {
    sut = checkboxOnClick({
      setChecked: setCheckedSpy,
      checked: checkedMock
    })
  })

  it('Should call function with correct param', () => {
    const stopPropagationMock = jest.fn()
    const event = {
      stopPropagation: stopPropagationMock
    } as any as React.MouseEvent

    sut(event)

    expect(setCheckedSpy).toBeCalledTimes(1)
    expect(setCheckedSpy).toBeCalledWith(!checkedMock)
  })
})

describe('createRowMemo', () => {
  let sut: ReturnType<typeof createRowMemo>

  const rowMock: DataPropTypes = {
    id: 0
  }
  const indexMock = 0
  const checkedMock = false

  beforeAll(() => {
    sut = createRowMemo({
      row: rowMock,
      index: indexMock,
      checked: checkedMock
    })
  })

  it('Should return a function that return the props in an object', () => {
    const fn = sut()

    expect(fn).toEqual({
      row: rowMock,
      index: indexMock,
      checked: checkedMock
    })
  })
})

describe('updateCheckedValue', () => {
  let sut: ReturnType<typeof updateCheckedValue>

  const headerCheckMock = false
  const setCheckedSpy = jest.fn()

  beforeAll(() => {
    sut = updateCheckedValue({
      headerCheck: headerCheckMock,
      setChecked: setCheckedSpy
    })
  })

  it('Should call setChecked with correct params', () => {
    sut()

    expect(setCheckedSpy).toBeCalledTimes(1)
    expect(setCheckedSpy).toBeCalledWith(headerCheckMock)
  })
})

describe('updateRowMemo', () => {
  let sut: ReturnType<typeof updateRowMemo>

  describe('Add row memo to array', () => {
    const rowMemoCheckedMock = {
      row: {
        index: 0
      },
      index: 0,
      checked: true
    }
    const emptyCheckedArrayMock: DataPropTypes[] = []

    it('Should push rowMemo to array', () => {
      const sut = updateRowMemo({
        rowMemo: rowMemoCheckedMock,
        checkedArray: emptyCheckedArrayMock
      })
      sut()

      expect(emptyCheckedArrayMock).toContain(rowMemoCheckedMock)
      expect(emptyCheckedArrayMock.length).toBe(1)
    })
  })

  describe('Remove row from array', () => {
    const rowMemoUncheckedMock = {
      row: {
        index: 0
      },
      index: 0,
      checked: false
    }
    const filledCheckedArrayMock = [rowMemoUncheckedMock]

    it('Should splice rowMemo from array', () => {
      const sut = updateRowMemo({
        rowMemo: rowMemoUncheckedMock,
        checkedArray: filledCheckedArrayMock
      })
      sut()

      expect(filledCheckedArrayMock).not.toContain(rowMemoUncheckedMock)
      expect(filledCheckedArrayMock.length).toBe(0)
    })
  })
})

describe('useRows', () => {
  const rowMock = {
    index: 0
  }
  const indexMock = 0
  const onRowClickSpy = jest.fn()
  const headerCheckMock = false
  const checkedArrayMock: DataPropTypes[] = []

  let sut: any

  beforeAll(() => {
    sut = renderHook(() => useRows({
      row: rowMock,
      index: indexMock,
      onRowClick: onRowClickSpy,
      headerCheck: headerCheckMock,
      checkedArray: checkedArrayMock
    }))
  })

  it('Should return expected object', () => {
    expect(sut.result.current.rowMemo).toEqual({
      row: rowMock,
      index: indexMock,
      checked: false
    });
  });
})
