import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SelectMulti } from "../../../src/components/SelectMulti/index";
import { toggleOptionsListVisibility, markCheckbox } from "../../../src/components/SelectMulti/hooks";

const optionsMock = [
  {
    id: '0',
    label: 'option 0'
  },
  {
    id: '1',
    label: 'option 1'
  },
  {
    id: '2',
    label: 'option 2'
  },
  {
    id: '3',
    label: 'option 3'
  },
]
const addOptionSpy = jest.fn()
const removeOptionSpy = jest.fn()

describe('addOption', () => {
  it('Should be called when option item is clicked and the selected list does not contain it', () => {
    render(
      <SelectMulti
        size="medium"
        selected={[]}
        options={optionsMock}
        addOption={addOptionSpy}
        removeOption={removeOptionSpy}
      />
    )

    const listWrapperIcon = screen.getByTestId('select-multi-toggle-options-list-icon')
    fireEvent.click(listWrapperIcon)

    const optionsItem = screen.getAllByTestId('select-multi-options-item')[0]
    fireEvent.click(optionsItem)
    
    expect(addOptionSpy).toBeCalledTimes(1)
    expect(addOptionSpy).toBeCalledWith(optionsMock[0])
  })
})

describe('removeOption', () => {
  it('Should be called when the selected item icon is clicked', () => {
    render(
      <SelectMulti
        size="medium"
        selected={[optionsMock[0]]}
        options={optionsMock}
        addOption={addOptionSpy}
        removeOption={removeOptionSpy}
      />
    )

    const icon = screen.getByTestId('select-multi-remove-icon')
    fireEvent.click(icon)

    expect(removeOptionSpy).toBeCalledTimes(1)
    expect(removeOptionSpy).toBeCalledWith(optionsMock[0])
  })

  it('Should be called when option item is clicked and the selected list contains it', () => {
    render(
      <SelectMulti
        size="medium"
        selected={[optionsMock[0]]}
        options={optionsMock}
        addOption={addOptionSpy}
        removeOption={removeOptionSpy}
      />
    )

    const listWrapperIcon = screen.getByTestId('select-multi-toggle-options-list-icon')
    fireEvent.click(listWrapperIcon)

    const optionsItem = screen.getAllByTestId('select-multi-options-item')[0]
    fireEvent.click(optionsItem)

    expect(removeOptionSpy).toBeCalledTimes(1)
    expect(removeOptionSpy).toBeCalledWith(optionsMock[0])
  })
})

describe('toggleOptionsListVisibility', () => {
  let sut: ReturnType<typeof toggleOptionsListVisibility>
  const setIsVisibleSpy = jest.fn()

  it('Should call setIsVisible with correct params', () => {
    sut = toggleOptionsListVisibility({
      isVisible: false,
      setIsVisible: setIsVisibleSpy,
      disabled: false
    })

    const stopPropagationMock = jest.fn()
    const event = {
      stopPropagation: stopPropagationMock
    } as any as React.MouseEvent

    sut(event)

    expect(setIsVisibleSpy).toBeCalledTimes(1)
    expect(setIsVisibleSpy).toBeCalledWith(true)
  })

  it('Should not call setIsVisible when disable is true', () => {
    sut = toggleOptionsListVisibility({
      isVisible: false,
      setIsVisible: setIsVisibleSpy,
      disabled: true
    })

    const stopPropagationMock = jest.fn()
    const event = {
      stopPropagation: stopPropagationMock
    } as any as React.MouseEvent

    sut(event)

    expect(setIsVisibleSpy).toBeCalledTimes(0)
  })
})

describe('markCheckbox', () => {
  let sut: ReturnType<typeof markCheckbox>

  beforeAll(() => {
    sut = markCheckbox({
      selectedList: [optionsMock[0], optionsMock[1]]
    })
  })

  it('Should return the selected item from selectedList', () => {
    const result = sut(optionsMock[0])

    expect(result).toBe(optionsMock[0])
  })

  it('Should return undefined if option is not on the selectedList', () => {
    const result = sut(optionsMock[2])

    expect(result).toBe(undefined)
  })
})