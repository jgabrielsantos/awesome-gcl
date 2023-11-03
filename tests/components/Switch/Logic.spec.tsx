import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { Switch } from "../../../src/components/Switch"

describe('Fire handle click on user click', () => {
  const checkedMock = false
  const handleClickSpy = jest.fn()
  it('Should fire function on wrapper click', () => {
    render(
      <Switch
        size="medium"
        checked={checkedMock}
        handleClick={handleClickSpy}
      />
    )

    const wrapper = screen.getByTestId('switch-wrapper')

    fireEvent.click(wrapper)

    expect(handleClickSpy).toBeCalledTimes(1)
  })

  it('Should not call function if switch is disabled', () => {
    render(
      <Switch
        size="medium"
        checked={checkedMock}
        handleClick={handleClickSpy}
        disabled
      />
    )

    const wrapper = screen.getByTestId('switch-wrapper')

    fireEvent.click(wrapper)

    expect(handleClickSpy).toBeCalledTimes(0)
  })
})