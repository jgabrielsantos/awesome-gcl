import React from "react";
import { render, screen } from '@testing-library/react'
import { TextButton } from "../../../../src/components/Buttons/TextButton/index";

const handleClickMock = jest.fn()
const buttonChildMock = 'button rendered for test purposes'

describe('Button types', () => {
  it('Should have button type', () => {
    render(
      <TextButton
        size="medium"
        type="button"
        theme="primary"
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </TextButton>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    expect(button).toHaveProperty('type', 'button')
  })

  it('Should have reset type', () => {
    render(
      <TextButton
        size="medium"
        type="reset"
        theme="primary"
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </TextButton>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    expect(button).toHaveProperty('type', 'reset')
  })

  it('Should have submit type', () => {
    render(
      <TextButton
        size="medium"
        type="submit"
        theme="primary"
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </TextButton>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    expect(button).toHaveProperty('type', 'submit')
  })
})