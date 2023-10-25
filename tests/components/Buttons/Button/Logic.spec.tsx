import React from "react";
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from "../../../../src/components/Buttons/Button";

const handleClickMock = jest.fn()
const buttonChildMock = 'button rendered for test purposes'

describe('Button handleClick function', () => {
  it('Should be fired only once upon click', () => {
    render(
      <Button
        type="button"
        size="medium"
        theme="primary"
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    fireEvent.click(button)
    expect(handleClickMock).toHaveBeenCalledTimes(1)

  })
  it('Should not fire the handleClick function', () => {
    render(
      <Button
        size="medium"
        type="button"
        theme="primary"
        disabled
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    fireEvent.click(button)
    expect(handleClickMock).toHaveBeenCalledTimes(0)
  })
})
