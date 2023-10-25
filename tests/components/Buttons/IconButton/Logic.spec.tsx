import React from "react";
import { fireEvent, render, screen } from '@testing-library/react'
import { IconButton } from "../../../../src/components/Buttons/IconButton";

const handleClickMock = jest.fn()
const buttonChildMock = 'button rendered for test purposes'

describe('Button handleClick function', () => {
  it('Should be fired only once upon click', () => {
    render(
      <IconButton
        type="button"
        size="medium"
        theme="primary"
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </IconButton>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    fireEvent.click(button)
    expect(handleClickMock).toHaveBeenCalledTimes(1)
  })

  it('Should not fire the handleClick function', () => {
    render(
      <IconButton
        size="medium"
        type="button"
        theme="primary"
        disabled
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </IconButton>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    fireEvent.click(button)
    expect(handleClickMock).toHaveBeenCalledTimes(0)
  })
})