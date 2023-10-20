import React from "react"
import 'jest-styled-components'
import { render, screen, fireEvent } from "@testing-library/react"
import { Select } from "../../../src/components/Select/index"
import { toRem } from "../../../src/utils"
import { colors } from "../../../src/styles"
import { toggleOptionListVisibility } from "../../../src/components/Select/hooks"

const labelMock = 'Label'
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

describe('Select Component default styles', () => {
  it('Wrapper', () => {
    render(
      <Select
        options={optionsMock}
        onChange={onChangeSpy}
      />
    )

    const wrapper = screen.getByTestId('select-wrapper')
    expect(wrapper).toHaveStyleRule('width', '100%')
    expect(wrapper).toHaveStyleRule('position', 'relative')
    expect(wrapper).toHaveStyleRule('display', 'flex')
    expect(wrapper).toHaveStyleRule('flex-direction', 'column')
    expect(wrapper).toHaveStyleRule('align-items', 'flex-start')
    expect(wrapper).toHaveStyleRule('justify-content', 'center')
    expect(wrapper).toHaveStyleRule('gap', toRem(6))
  })

  it('Label', () => {
    render(
      <Select
        label={labelMock}
        options={optionsMock}
        onChange={onChangeSpy}
      />
    )

    const label = screen.getByTestId('select-label')
    expect(label).toHaveStyleRule('font-size', '1rem')
    expect(label).toHaveStyleRule('width', '100%')
    expect(label).toHaveStyleRule('color', colors.grayscale[100])
  })

  it('Input', () => {
    render(
      <Select
        selected={optionsMock[0]}
        options={optionsMock}
        onChange={onChangeSpy}
      />
    )

    const input = screen.getByTestId('select-input')
    expect(input).toHaveStyleRule('cursor', 'inherit')
    expect(input).toHaveStyleRule('font-size', '1rem')
    expect(input).toHaveStyleRule('border', 'none')
    expect(input.getAttribute('type')).toBe('text')
    expect(input.getAttribute('value')).toBe('option 0')
  })

  it('Options', () => {
    render(
      <Select
        options={optionsMock}
        onChange={onChangeSpy}
      />
    )
    const optionsWrapper = screen.getByTestId('select-option-list')
    expect(optionsWrapper).toHaveStyleRule('display', 'none')
    expect(optionsWrapper).toHaveStyleRule('width', '100%')
    expect(optionsWrapper).toHaveStyleRule('flex-direction', 'column')
    expect(optionsWrapper).toHaveStyleRule('align-items', 'flex-start')
    expect(optionsWrapper).toHaveStyleRule('justify-content', 'center')
    expect(optionsWrapper).toHaveStyleRule('gap', toRem(8))
    expect(optionsWrapper).toHaveStyleRule('border', `1px solid ${colors.grayscale[40]}`)
    expect(optionsWrapper).toHaveStyleRule('border-radius', toRem(8))
    expect(optionsWrapper).toHaveStyleRule('padding', `${toRem(12)} ${toRem(16)}`)
    expect(optionsWrapper).toHaveStyleRule('position', 'absolute')
    expect(optionsWrapper).toHaveStyleRule('right', '0')
    expect(optionsWrapper).toHaveStyleRule('top', '110%')
    expect(optionsWrapper).toHaveStyleRule('background-color', colors.white[100])

    const inputWrapper = screen.getByTestId('select-input-wrapper')
    fireEvent.click(inputWrapper)

    expect(optionsWrapper).toHaveStyleRule('display', 'flex')

    const optionsItem = screen.getByTestId('select-option-item-0')
    expect(optionsItem).toHaveStyleRule('cursor', 'pointer')
    expect(optionsItem).toHaveStyleRule('width', '100%')
    expect(optionsItem).toHaveStyleRule('color', colors.grayscale[100])
    expect(optionsItem).toHaveStyleRule('overflow', 'hidden')
    expect(optionsItem).toHaveStyleRule('white-space', 'nowrap')
    expect(optionsItem).toHaveStyleRule('text-overflow', 'ellipsis')
  })
})

describe('Icon options', () => {
  it('Default icon', () => {
    render(
      <Select
        options={optionsMock}
        onChange={onChangeSpy}
      />
    )

    const defaultIcon = screen.getByTestId('select-default-icon')
    expect(defaultIcon).toBeTruthy()
  })

  it('Default icon', () => {
    render(
      <Select
        options={optionsMock}
        onChange={onChangeSpy}
        icon="fa fa-cloud"
      />
    )

    const customIcon = screen.getByTestId('select-custom-icon')
    expect(customIcon).toBeTruthy()
  })
})

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


describe('onChange', () => {
  it('Should call onChange wit correct params when clicking on a option item', () => {
    render(
      <Select
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