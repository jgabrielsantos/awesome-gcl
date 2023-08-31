import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SelectMulti } from "./index";
import { toggleOptionsListVisibility, markCheckbox } from "./hooks";
import { colors } from "../../styles";
import { toRem } from "../../utils";
import 'jest-styled-components'

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

describe('Component design', () => {
  it('Wrapper', () => {
    render(
      <SelectMulti
        options={optionsMock}
        addOption={addOptionSpy}
        removeOption={removeOptionSpy}
      />
    )

    const wrapper = screen.getByTestId('select-multi-wrapper')

    expect(wrapper).toHaveStyleRule('width', '100%')
    expect(wrapper).toHaveStyleRule('display', 'flex')
    expect(wrapper).toHaveStyleRule('flex-direction', 'column')
    expect(wrapper).toHaveStyleRule('align-items', 'flex-start')
    expect(wrapper).toHaveStyleRule('justify-content', 'center')
    expect(wrapper).toHaveStyleRule('gap', toRem(6))
    expect(wrapper).toHaveStyleRule('position', 'relative')
  })

  it('Label', () => {
    render(
      <SelectMulti
        options={optionsMock}
        addOption={addOptionSpy}
        removeOption={removeOptionSpy}
        label="Label"
      />
    )

    const label = screen.getByTestId('select-multi-label')

    expect(label).toHaveStyleRule('font-size', '1rem')
    expect(label).toHaveStyleRule('width', '100%')
    expect(label).toHaveStyleRule('color', colors.grayscale[100])
  })

  it('Select List Wrapper', () => {
    render(
      <SelectMulti
        options={optionsMock}
        addOption={addOptionSpy}
        removeOption={removeOptionSpy}
      />
    )

    const listWrapper = screen.getByTestId('select-multi-select-list-wrapper')

    expect(listWrapper).toHaveStyleRule('width', '100%')
    expect(listWrapper).toHaveStyleRule('display', 'flex')
    expect(listWrapper).toHaveStyleRule('align-items', 'center')
    expect(listWrapper).toHaveStyleRule('justify-content', 'space-between')
    expect(listWrapper).toHaveStyleRule('gap', toRem(10))
    expect(listWrapper).toHaveStyleRule('padding', `${toRem(12)} ${toRem(16)}`)
    expect(listWrapper).toHaveStyleRule('border', `1px solid ${colors.grayscale[40]}`)
    expect(listWrapper).toHaveStyleRule('border-radius', toRem(6))
    expect(listWrapper).toHaveStyleRule('cursor', 'pointer')
    expect(listWrapper).toHaveStyleRule('background-color', colors.white[100])
  })

  it('Placeholder', () => {
    render(
      <SelectMulti
        options={optionsMock}
        addOption={addOptionSpy}
        removeOption={removeOptionSpy}
        placeholder="Placeholder"
      />
    )

    const placeholder = screen.getByTestId('select-multi-placeholder')

    expect(placeholder).toHaveStyleRule('font-size', '1rem')
    expect(placeholder).toHaveStyleRule('color', colors.grayscale[60])
    expect(placeholder).toHaveStyleRule('width', '100%')
  })

  it('Selected List', () => {
    render(
      <SelectMulti
        options={optionsMock}
        addOption={addOptionSpy}
        removeOption={removeOptionSpy}
      />
    )

    const selectedList = screen.getByTestId('select-multi-selected-list')

    expect(selectedList).toHaveStyleRule('width', '100%')
    expect(selectedList).toHaveStyleRule('display', 'flex')
    expect(selectedList).toHaveStyleRule('align-items', 'center')
    expect(selectedList).toHaveStyleRule('justify-content', 'flex-start')
    expect(selectedList).toHaveStyleRule('gap', toRem(6))
  })

  it('Selected Item', () => {
    render(
      <SelectMulti
        selected={[optionsMock[0]]}
        options={optionsMock}
        addOption={addOptionSpy}
        removeOption={removeOptionSpy}
      />
    )

    const selectedItem = screen.getByTestId('select-multi-selected-item')

    expect(selectedItem).toHaveStyleRule('width', 'fit-content')
    expect(selectedItem).toHaveStyleRule('display', 'flex')
    expect(selectedItem).toHaveStyleRule('align-items', 'center')
    expect(selectedItem).toHaveStyleRule('justify-content', 'space-between')
    expect(selectedItem).toHaveStyleRule('gap', toRem(6))
    expect(selectedItem).toHaveStyleRule('padding', `${toRem(8)} ${toRem(12)}`)
    expect(selectedItem).toHaveStyleRule('border-radius', toRem(6))
    expect(selectedItem).toHaveStyleRule('background-color', colors.grayscale[0])
    expect(selectedItem).toHaveStyleRule('background-color', colors.support.alert[5], {
      modifier: ':hover'
    })
  })

  it('Remove Item Button Icon', () => {
    render(
      <SelectMulti
        selected={[optionsMock[0]]}
        options={optionsMock}
        addOption={addOptionSpy}
        removeOption={removeOptionSpy}
      />
    )

    const removeIcon = screen.getByTestId('select-multi-remove-icon')

    expect(removeIcon.getAttribute('data-icon')).toBe('xmark')
  })

  it('Toggle Options List Button Icon', () => {
    render(
      <SelectMulti
        options={optionsMock}
        addOption={addOptionSpy}
        removeOption={removeOptionSpy}
      />
    )

    const listWrapperIcon = screen.getByTestId('select-multi-toggle-options-list-icon')
    
    expect(listWrapperIcon.getAttribute('data-icon')).toBe('chevron-down')
    
    fireEvent.click(listWrapperIcon)
    
    expect(listWrapperIcon.getAttribute('data-icon')).toBe('chevron-up')
  })

  it('Options List', () => {
    render(
      <SelectMulti
      options={optionsMock}
      addOption={addOptionSpy}
      removeOption={removeOptionSpy}
      />
    )

    const listWrapperIcon = screen.getByTestId('select-multi-toggle-options-list-icon')
    fireEvent.click(listWrapperIcon)

    const optionsList = screen.getByTestId('select-multi-options-list')

    expect(optionsList).toHaveStyleRule('width', '100%')
    expect(optionsList).toHaveStyleRule('display', 'flex')
    expect(optionsList).toHaveStyleRule('flex-direction', 'column')
    expect(optionsList).toHaveStyleRule('align-items', 'flex-start')
    expect(optionsList).toHaveStyleRule('justify-content', 'center')
    expect(optionsList).toHaveStyleRule('gap', toRem(8))
    expect(optionsList).toHaveStyleRule('border', `1px solid ${colors.grayscale[40]}`)
    expect(optionsList).toHaveStyleRule('border-radius', toRem(8))
    expect(optionsList).toHaveStyleRule('padding', `${toRem(12)} ${toRem(16)}`)
    expect(optionsList).toHaveStyleRule('position', 'absolute')
    expect(optionsList).toHaveStyleRule('right', '0')
    expect(optionsList).toHaveStyleRule('top', '110%')
    expect(optionsList).toHaveStyleRule('background-color', colors.white[100])
  })

  it('Options Item', () => {
    render(
      <SelectMulti
        options={optionsMock}
        addOption={addOptionSpy}
        removeOption={removeOptionSpy}
      />
    )

    const listWrapperIcon = screen.getByTestId('select-multi-toggle-options-list-icon')
    fireEvent.click(listWrapperIcon)

    const optionsItem = screen.getAllByTestId('select-multi-options-item')[0]

    expect(optionsItem).toHaveStyleRule('cursor', 'pointer')
    expect(optionsItem).toHaveStyleRule('width', '100%')
    expect(optionsItem).toHaveStyleRule('color', colors.grayscale[100])
    expect(optionsItem).toHaveStyleRule('overflow', 'hidden')
    expect(optionsItem).toHaveStyleRule('white-space', 'nowrap')
    expect(optionsItem).toHaveStyleRule('text-overflow', 'ellipsis')
  })

  it('Disabled Prop', () => {
    render(
      <SelectMulti
        options={optionsMock}
        addOption={addOptionSpy}
        removeOption={removeOptionSpy}
        disabled
      />
    )

    const listWrapper = screen.getByTestId('select-multi-select-list-wrapper')

    expect(listWrapper).toHaveStyleRule('cursor', 'not-allowed')
    expect(listWrapper).toHaveStyleRule('background-color', colors.grayscale[0])
  })
})

describe('addOption', () => {
  it('Should be called when option item is clicked and the selected list does not contain it', () => {
    render(
      <SelectMulti
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
  it('Should be called when option item is clicked and the selected list contains it', () => {
    render(
      <SelectMulti
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

    sut()

    expect(setIsVisibleSpy).toBeCalledTimes(1)
    expect(setIsVisibleSpy).toBeCalledWith(true)
  })

  it('Should not call setIsVisible when disable is true', () => {
    sut = toggleOptionsListVisibility({
      isVisible: false,
      setIsVisible: setIsVisibleSpy,
      disabled: true
    })

    sut()

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