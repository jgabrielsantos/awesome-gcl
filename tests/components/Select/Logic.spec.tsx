import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { Select } from "../../../src/components/Select/index"
import { toggleOptionListVisibility } from "../../../src/components/Select/hooks"

const optionsMock = [
  {
    label: 'option 0',
    value: 0
  },
  {
    label: 'option 1',
    value: 'option'
  },
  {
    label: 'option 2',
    value: null
  },
]
const onChangeSpy = jest.fn()

describe('toggleOptionListVisibility', () => {
  let sut: ReturnType<typeof toggleOptionListVisibility>
  const isVisibleMock = false
  const setIsVisibleSpy = jest.fn()

  beforeAll(() => {
    sut = toggleOptionListVisibility({
      isVisible: isVisibleMock,
      setIsVisible: setIsVisibleSpy
    })
  })

  it('Should call setIsVisible with correct params', () => {
    sut()

    expect(setIsVisibleSpy).toBeCalledWith(!isVisibleMock)
    expect(setIsVisibleSpy).toBeCalledTimes(1)
  })
})


describe('onChange prop function', () => {
  it('Should call onChange wit correct params when clicking on a option item', () => {
    render(
      <Select
        size="medium"
        options={optionsMock}
        onChange={onChangeSpy}
      />
    )

    const inputWrapper = screen.getByTestId('select-input-wrapper')
    fireEvent.click(inputWrapper)

    const optionsItem = screen.getByTestId('select-option-item-0')
    fireEvent.click(optionsItem)

    expect(onChangeSpy).toBeCalledTimes(1)
  })
})

describe('Input Wrapper on click function', () => {
  it('Should not open the option list if the disabled prop is passed as true', () => {
    render(
      <Select
        size="medium"
        options={optionsMock}
        onChange={onChangeSpy}
        disabled={true}
      />
    )

    const inputWrapper = screen.getByTestId('select-input-wrapper')
    fireEvent.click(inputWrapper)

    const optionList = screen.getByTestId('select-option-list')
    expect(optionList.classList).toContain('hidden')
  })

  it('Should open the option list if the disabled prop is passed as false', () => {
    render(
      <Select
        size="medium"
        options={optionsMock}
        onChange={onChangeSpy}
        disabled={false}
      />
    )

    const inputWrapper = screen.getByTestId('select-input-wrapper')
    fireEvent.click(inputWrapper)

    const optionList = screen.getByTestId('select-option-list')
    expect(optionList.classList).toContain('flex')
  })
})
