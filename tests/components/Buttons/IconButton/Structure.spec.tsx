import React from "react";
import { render, screen } from '@testing-library/react'
import { IconButton } from "../../../../src/components/Buttons/IconButton/index";

const handleClickMock = jest.fn()
const buttonChildMock = 'button rendered for test purposes'

describe('Button types', () => {
  it('Should have button type', () => {
    render(
      <IconButton
        size="medium"
        type="button"
        theme="primary"
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </IconButton>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    expect(button).toHaveProperty('type', 'button')
  })

  it('Should have reset type', () => {
    render(
      <IconButton
        size="medium"
        type="reset"
        theme="primary"
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </IconButton>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    expect(button).toHaveProperty('type', 'reset')
  })

  it('Should have submit type', () => {
    render(
      <IconButton
        size="medium"
        type="submit"
        theme="primary"
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </IconButton>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    expect(button).toHaveProperty('type', 'submit')
  })
})