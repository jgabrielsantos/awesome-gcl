import React from "react"
import 'jest-styled-components'
import { fireEvent, render, screen } from "@testing-library/react"
import { InputWrapper } from "./index"
import { colors } from "../../../../styles"
import { toRem } from "../../../../utils"

const childrenMock = 'children'
const onClickSpy = jest.fn()

describe('Input Wrapper layout', () => {
  it('Default design', () => {
    render(
      <InputWrapper
        onClick={onClickSpy}
        disabled={false}
      >
        {childrenMock}
      </InputWrapper>
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
  })
  it('Disable prop design', () => {
    render(
      <InputWrapper
        onClick={onClickSpy}
        disabled
      >
        {childrenMock}
      </InputWrapper>
    )

    const inputWrapper = screen.getByTestId('select-input-wrapper')
    expect(inputWrapper).toHaveStyleRule('cursor', 'not-allowed')
    expect(inputWrapper).toHaveStyleRule('background-color', colors.grayscale[0])
  })
})

describe('Input onClick function', () => {
  it('Should call function if disabled prop is false', () => {
    render(
      <InputWrapper
        onClick={onClickSpy}
        disabled={false}
      >
        {childrenMock}
      </InputWrapper>
    )

    const inputWrapper = screen.getByTestId('select-input-wrapper')
    fireEvent.click(inputWrapper)

    expect(onClickSpy).toHaveBeenCalledTimes(1)
  })
  it('Should not call function if disabled prop is true', () => {
    render(
      <InputWrapper
        onClick={onClickSpy}
        disabled
      >
        {childrenMock}
      </InputWrapper>
    )

    const inputWrapper = screen.getByTestId('select-input-wrapper')
    fireEvent.click(inputWrapper)

    expect(onClickSpy).toHaveBeenCalledTimes(0)
  })
})