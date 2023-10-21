import React from "react";
import { render, screen } from '@testing-library/react'
import { Button } from "../../../../src/components/Buttons/Button/index";

const handleClickMock = jest.fn()
const buttonChildMock = 'button rendered for test purposes'

describe('Button types', () => {
  it('Should have button type', () => {
    render(
      <Button
        size="medium"
        type="button"
        theme="primary"
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    expect(button).toHaveProperty('type', 'button')
  })

  it('Should have reset type', () => {
    render(
      <Button
        size="medium"
        type="reset"
        theme="primary"
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    expect(button).toHaveProperty('type', 'reset')
  })

  it('Should have submit type', () => {
    render(
      <Button
        size="medium"
        type="submit"
        theme="primary"
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    expect(button).toHaveProperty('type', 'submit')
  })
})