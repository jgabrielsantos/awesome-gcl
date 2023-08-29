import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { colors } from "../../styles";
import { toRem } from "../../utils";
import 'jest-styled-components'
import { Checkbox } from ".";

const handleClickSpy = jest.fn()

describe('Component design', () => {
  it('Wrapper', () => {
    render(
      <Checkbox
        checked={false}
        handleClick={handleClickSpy}
      />
    )

    const wrapper = screen.getByTestId('checkbox-wrapper')

    expect(wrapper).toHaveStyleRule('width', '100%')
    expect(wrapper).toHaveStyleRule('display', 'flex')
    expect(wrapper).toHaveStyleRule('align-items', 'center')
    expect(wrapper).toHaveStyleRule('justify-content', 'flex-start')
    expect(wrapper).toHaveStyleRule('gap', toRem(6))
    expect(wrapper).toHaveStyleRule('position', 'relative')
  })

  it('Input', () => {
    render(
      <Checkbox
        checked={false}
        handleClick={handleClickSpy}
      />
    )

    const input = screen.getByTestId('checkbox-input')

    expect(input).toHaveStyleRule('width', toRem(20))
    expect(input).toHaveStyleRule('height', toRem(20))
    expect(input).toHaveStyleRule('border', `1px solid ${colors.grayscale[40]}`)
    expect(input).toHaveStyleRule('border-radius', toRem(4))
    expect(input).toHaveStyleRule('background-color', colors.white[100])
    expect(input).toHaveStyleRule('cursor', 'pointer')
    expect(input).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled'
    })
    expect(input).toHaveStyleRule('border', `1px solid ${colors.grayscale[40]}`, {
      modifier: ':disabled'
    })
    expect(input).toHaveStyleRule('background-color', colors.grayscale[40], {
      modifier: ':disabled'
    })
  })

  it('Icon', () => {
    render(
      <Checkbox
        checked
        handleClick={handleClickSpy}
      />
    )

    const icon = screen.getByTestId('checkbox-icon')

    expect(icon.getAttribute('data-icon')).toBe('check')
    expect(icon).toHaveStyleRule('width', toRem(16))
    expect(icon).toHaveStyleRule('display', 'flex')
    expect(icon).toHaveStyleRule('color', colors.white[100])
    expect(icon).toHaveStyleRule('position', 'absolute')
    expect(icon).toHaveStyleRule('left', '2px')
    expect(icon).toHaveStyleRule('cursor', 'pointer')
  })

  it('Label', () => {
    render(
      <Checkbox
        checked={false}
        handleClick={handleClickSpy}
        label="Checkbox label"
      />
    )

    const label = screen.getByTestId('checkbox-label')

    expect(label).toHaveStyleRule('font-size', '1rem')
  })

  it('Checked prop', () => {
    render(
      <Checkbox
        checked
        handleClick={handleClickSpy}
      />
    )

    const input = screen.getByTestId('checkbox-input')

    expect(input).toHaveStyleRule('border', `1px solid ${colors.primary[50]}`)
    expect(input).toHaveStyleRule('background-color', colors.primary[50])
  })
})

describe('Component logic', () => {
  it('Should call the prop function when input is clicked', () => {
    render(
      <Checkbox
        checked={false}
        handleClick={handleClickSpy}
      />
    )

    const input = screen.getByTestId('checkbox-input')

    fireEvent.click(input)

    expect(handleClickSpy).toBeCalledTimes(1)
  })
})