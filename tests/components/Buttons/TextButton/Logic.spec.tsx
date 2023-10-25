import React from "react";
import { fireEvent, render, screen } from '@testing-library/react'
import { TextButton } from "../../../../src/components/Buttons/TextButton";

const handleClickMock = jest.fn()
const buttonChildMock = 'button rendered for test purposes'

describe('Button handleClick function', () => {
  it('Should be fired only once upon click', () => {
    render(
      <TextButton
        type="button"
        size="medium"
        theme="primary"
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </TextButton>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    fireEvent.click(button)
    expect(handleClickMock).toHaveBeenCalledTimes(1)
  })

  it('Should not fire the handleClick function', () => {
    render(
      <TextButton
        size="medium"
        type="button"
        theme="primary"
        disabled
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </TextButton>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    fireEvent.click(button)
    expect(handleClickMock).toHaveBeenCalledTimes(0)
  })
})