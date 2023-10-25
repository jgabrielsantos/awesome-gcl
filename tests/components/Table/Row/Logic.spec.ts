import { checkboxOnClick, rowOnClick } from "../../../../src/components/Table/Components/Rows/logic"
import { DataPropTypes } from "../../../../src/components/Table/Components/Rows/types"

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

  describe('Defined function', () => {
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
})
