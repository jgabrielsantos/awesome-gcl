import React from "react";
import 'jest-styled-components'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from "./index";
import { toRem } from "../../../utils";
import { colors } from "../../../styles";

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
})

describe('Button styles', () => {
  describe('Sizes', () => {})

  describe('Themes', () => {})
})

describe('Button types', () => {
  it('Should have button type', () => {
    render(
      <Button
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
        type="reset"
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
        type="submit"
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    expect(button).toHaveProperty('type', 'submit')
  })
})

describe('Button disabled prop', () => {
  it('Should render disabled styled', () => {
    render(
      <Button
        disabled
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    expect(button).toHaveStyleRule('cursor', 'not-allowed')
    expect(button).toHaveStyleRule('border-color', colors.grayscale[40], {
      modifier: ':disabled'
    })
    expect(button).toHaveStyleRule('color', colors.grayscale[60], {
      modifier: ':disabled'
    })
  })

  it('Should not fire the handleClick function', () => {
    render(
      <Button
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
