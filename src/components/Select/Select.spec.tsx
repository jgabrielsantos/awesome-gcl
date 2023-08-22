import React from "react"
import 'jest-styled-components'
import { render, screen, fireEvent } from "@testing-library/react"
import { Select } from "./index"
import { toRem } from "../../utils"
import { colors } from "../../styles"

const labelMock = 'Label'
const placeholderMock = 'placeholder'
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
const iconMock = 'fa fa-cloud'

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
    expect(wrapper).toHaveStyleRule('gap', toRem(8))
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
    expect(label).toHaveStyleRule('line-height', '1.5')
    expect(label).toHaveStyleRule('color', colors.grayscale[100])
  })

  it('Input', () => {
    render(
      <Select
        options={optionsMock}
        onChange={onChangeSpy}
      />
    )

    const inputWrapper = screen.getByTestId('select-input-wrapper')
    expect(inputWrapper).toHaveStyleRule('width', '100%')
    expect(inputWrapper).toHaveStyleRule('display', 'flex')
    expect(inputWrapper).toHaveStyleRule('align-items', 'center')
    expect(inputWrapper).toHaveStyleRule('justify-content', 'space-between')
    expect(inputWrapper).toHaveStyleRule('border', `1px solid ${colors.grayscale[40]}`)
    expect(inputWrapper).toHaveStyleRule('border-radius', toRem(6))
    expect(inputWrapper).toHaveStyleRule('padding', `${toRem(12)} ${toRem(16)}`)
    expect(inputWrapper).toHaveStyleRule('cursor', 'pointer')
    expect(inputWrapper).toHaveStyleRule('background-color', colors.white[100])

    const input = screen.getByTestId('select-input')
    expect(input).toHaveStyleRule('cursor', 'pointer')
    expect(input).toHaveStyleRule('font-size', '1rem')
    expect(input).toHaveStyleRule('border', 'none')
  })

  it('Options', () => {
    render(
      <Select
        options={optionsMock}
        onChange={onChangeSpy}
      />
    )
    
    const inputWrapper = screen.getByTestId('select-input-wrapper')
    fireEvent.click(inputWrapper)
    
    const optionsWrapper = screen.getByTestId('select-option-list')
    expect(optionsWrapper).toHaveStyleRule('width', '100%')
    expect(optionsWrapper).toHaveStyleRule('display', 'flex')
    expect(optionsWrapper).toHaveStyleRule('flex-direction', 'column')
    expect(optionsWrapper).toHaveStyleRule('align-items', 'flex-start')
    expect(optionsWrapper).toHaveStyleRule('justify-content', 'center')
    expect(optionsWrapper).toHaveStyleRule('gap', toRem(8))
    expect(optionsWrapper).toHaveStyleRule('border', `1px solid ${colors.grayscale[40]}`)
    expect(optionsWrapper).toHaveStyleRule('border-radius', toRem(8))
    expect(optionsWrapper).toHaveStyleRule('padding', `${toRem(8)} ${toRem(10)}`)
    expect(optionsWrapper).toHaveStyleRule('position', 'absolute')
    expect(optionsWrapper).toHaveStyleRule('right', '0')
    expect(optionsWrapper).toHaveStyleRule('top', '80px')

    const optionsItem = screen.getByTestId('select-option-item-0')
    expect(optionsItem).toHaveStyleRule('cursor', 'pointer')
    expect(optionsItem).toHaveStyleRule('width', '100%')
    expect(optionsItem).toHaveStyleRule('color', colors.grayscale[100])
    expect(optionsItem).toHaveStyleRule('overflow-x', 'hidden')
    expect(optionsItem).toHaveStyleRule('white-space', 'nowrap')
    expect(optionsItem).toHaveStyleRule('text-overflow', 'ellipsis')
  })
})