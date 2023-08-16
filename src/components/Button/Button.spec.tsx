import React from "react";
import 'jest-styled-components'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from "./index";
import { toRem } from "../../utils";
import { colors } from "../../styles";

const handleClickMock = jest.fn()
const buttonChildMock = 'button rendered for test purposes'

describe('Button default forms', () => {
  it('Should have default styles', () => {
    render(
      <Button
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    expect(button).toHaveStyleRule('cursor', 'pointer')
    expect(button).toHaveStyleRule('width', 'fit-content')
    expect(button).toHaveStyleRule('height', 'fit-content')
    expect(button).toHaveStyleRule('display', 'flex')
    expect(button).toHaveStyleRule('flex-wrap', 'wrap')
    expect(button).toHaveStyleRule('justify-content', 'center')
    expect(button).toHaveStyleRule('align-items', 'center')
    expect(button).toHaveStyleRule('border-radius', toRem(6))
    expect(button).toHaveStyleRule('border-width', '1px')
    expect(button).toHaveStyleRule('border-style', 'solid')
    expect(button).toHaveStyleRule('font-weight', '500')
  })

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

  it('Should have medium size', () => {
    render(
      <Button
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    expect(button).toHaveStyleRule('font-size', toRem(14))
    expect(button).toHaveStyleRule('line-height', toRem(20))
    expect(button).toHaveStyleRule('padding', `${toRem(10)} ${toRem(20)}`)
  })

  it('Should have primary customTheme', () => {
    render(
      <Button
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    expect(button).toHaveStyleRule('border-color', colors.primary[50])
    expect(button).toHaveStyleRule('color', colors.white[100])
    expect(button).toHaveStyleRule('background-color', colors.primary[50])
    expect(button).toHaveStyleRule('border-color', colors.primary[100], {
      modifier: ':hover'
    })
    expect(button).toHaveStyleRule('background-color', colors.primary[100], {
      modifier: ':hover'
    })
  })
})

describe('Button handleClick function', () => {
  it('Should be fired only once upon click', () => {
    render(
      <Button
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

describe('Button sizes styles', () => {
  it('Should render small size respective style when receiving the prop', () => {
    render(
      <Button
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
  })

  it('Should render medium size respective style when receiving the prop', () => {
    render(
      <Button
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )
  })

  it('Should render large size respective style when receiving the prop', () => {
    render(
      <Button
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )
  })
})

describe('Button themes styles', () => {
  it('Should render primary customTheme respective style when receiving the prop', () => {
    render(
      <Button
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )
  })

  it('Should render secondary customTheme respective style when receiving the prop', () => {
    render(
      <Button
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )
  })

  it('Should render tertiary customTheme respective style when receiving the prop', () => {
    render(
      <Button
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )
  })

  it('Should render destructive-primary customTheme respective style when receiving the prop', () => {
    render(
      <Button
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )
  })

  it('Should render destructive-secondary customTheme respective style when receiving the prop', () => {
    render(
      <Button
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )
  })

  it('Should render success-primary customTheme respective style when receiving the prop', () => {
    render(
      <Button
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )
  })

  it('Should render success-secondary customTheme respective style when receiving the prop', () => {
    render(
      <Button
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )
  })

  it('Should render contrast-primary customTheme respective style when receiving the prop', () => {
    render(
      <Button
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )
  })

  it('Should render contrast-secondary customTheme respective style when receiving the prop', () => {
    render(
      <Button
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </Button>
    )
  })
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
