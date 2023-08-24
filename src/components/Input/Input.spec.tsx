import React from "react";
import 'jest-styled-components'
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from './index'
import { setPasswordVisibleHandler } from "./hooks";
import { colors } from "../../styles";
import { toRem } from "../../utils";

const onChangeSpy = jest.fn()

describe('Component design', () => {
  it('Wrapper', () => {
    render(
      <Input
        type="text"
        value=""
        onChange={onChangeSpy}
      />
    )

    const wrapper = screen.getByTestId('input-wrapper')

    expect(wrapper).toHaveStyleRule('width', '100%')
    expect(wrapper).toHaveStyleRule('display', 'flex')
    expect(wrapper).toHaveStyleRule('flex-direction', 'column')
    expect(wrapper).toHaveStyleRule('align-items', 'flex-start')
    expect(wrapper).toHaveStyleRule('justify-content', 'flex-start')
    expect(wrapper).toHaveStyleRule('gap', toRem(6))
  })

  it('Label', () => {
    render(
      <Input
        label="Input label"
        type="text"
        value=""
        onChange={onChangeSpy}
      />
    )

    const label = screen.getByTestId('input-label')

    expect(label).toHaveStyleRule('width', '100%')
    expect(label).toHaveStyleRule('color', colors.grayscale[100])
    expect(label).toHaveStyleRule('font-size', '1rem')
  })

  it('Input Wrapper', () => {
    render(
      <Input
        type="text"
        value=""
        onChange={onChangeSpy}
      />
    )

    const inputWrapper = screen.getByTestId('input-input-wrapper')

    expect(inputWrapper).toHaveStyleRule('width', '100%')
    expect(inputWrapper).toHaveStyleRule('display', 'flex')
    expect(inputWrapper).toHaveStyleRule('align-items', 'center')
    expect(inputWrapper).toHaveStyleRule('justify-content', 'space-between')
    expect(inputWrapper).toHaveStyleRule('gap', toRem(8))
    expect(inputWrapper).toHaveStyleRule('padding', `${toRem(12)} ${toRem(16)}`)
    expect(inputWrapper).toHaveStyleRule('border-radius', toRem(6))
    expect(inputWrapper).toHaveStyleRule('border', `1px solid ${colors.grayscale[40]}`)
    expect(inputWrapper).toHaveStyleRule('cursor', 'text')
    expect(inputWrapper).toHaveStyleRule('background-color', colors.white[100])
    expect(inputWrapper).toHaveStyleRule('border-color', colors.primary[50], {
      modifier: ':focus-within'
    })
  })

  it('Input', () => {
    render(
      <Input
        type="text"
        value=""
        placeholder="placeholder"
        onChange={onChangeSpy}
      />
    )

    const input = screen.getByTestId('input-input')
    expect(input).toHaveStyleRule('width', '100%')
    expect(input).toHaveStyleRule('color', colors.grayscale[80])
    expect(input).toHaveStyleRule('font-size', '1rem')
    expect(input).toHaveStyleRule('border', 'none')
    expect(input).toHaveStyleRule('cursor', 'text')
    // expect(input).toHaveStyleRule('color', colors.grayscale[40], {
    //   modifier: '::placeholder'
    // })
    expect(input).toHaveStyleRule('color', colors.grayscale[60], {
      modifier: ':disabled'
    })
    expect(input).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled'
    })
  })

  it('Password Icon', () => {
    render(
      <Input
        type="password"
        value=""
        onChange={onChangeSpy}
      />
    )

    const passwordIcon = screen.getByTestId('input-password-icon')

    expect(passwordIcon).toHaveStyleRule('cursor', 'pointer')
  })

  it('Error Message', () => {
    render(
      <Input
        type="text"
        value=""
        onChange={onChangeSpy}
        error
        errorMessage="Error message"
      />
    )

    const errorMessage = screen.getByTestId('input-error-message')

    expect(errorMessage).toHaveStyleRule('font-size', '1rem')
    expect(errorMessage).toHaveStyleRule('color', colors.support.alert[50])
  })
})

describe('Component designs for optional props', () => {
  it('Error', () => {
    render(
      <Input
        type="text"
        value=""
        onChange={onChangeSpy}
        error
      />
    )

    const inputWrapper = screen.getByTestId('input-input-wrapper')

    expect(inputWrapper).toHaveStyleRule('border', `1px solid ${colors.support.alert[50]}`)
  })

  it('Disabled', () => {
    render(
      <Input
        type="text"
        value=""
        onChange={onChangeSpy}
        disabled
      />
    )

    const inputWrapper = screen.getByTestId('input-input-wrapper')

    expect(inputWrapper).toHaveStyleRule('cursor', 'not-allowed')
    expect(inputWrapper).toHaveStyleRule('background-color', colors.grayscale[5])
  })
})

describe('Component types should be exclusively ', () => {
  it('Should render type text', () => {
    render(
      <Input
        type="text"
        value=""
        onChange={onChangeSpy}
      />
    )

    const inputType = screen.getByTestId('input-input').getAttribute('type')

    expect(inputType).toBe('text')
  })

  it('Should render type password', () => {
    render(
      <Input
        type="password"
        value=""
        onChange={onChangeSpy}
      />
    )

    const inputType = screen.getByTestId('input-input').getAttribute('type')

    expect(inputType).toBe('password')
  })

  it('Should render type email', () => {
    render(
      <Input
        type="email"
        value=""
        onChange={onChangeSpy}
      />
    )

    const inputType = screen.getByTestId('input-input').getAttribute('type')

    expect(inputType).toBe('email')
  })

  it('Should render type tel', () => {
    render(
      <Input
        type="tel"
        value=""
        onChange={onChangeSpy}
      />
    )

    const inputType = screen.getByTestId('input-input').getAttribute('type')

    expect(inputType).toBe('tel')
  })

  it('Should render type number', () => {
    render(
      <Input
        type="number"
        value=""
        onChange={onChangeSpy}
      />
    )

    const inputType = screen.getByTestId('input-input').getAttribute('type')

    expect(inputType).toBe('number')
  })
})

describe('Password type input', () => {
  it('Should render icon', () => {
    render(
      <Input
        type="password"
        value=""
        onChange={onChangeSpy}
      />
    )

    const passwordIcon = screen.getByTestId('input-password-icon')

    expect(passwordIcon).toBeTruthy()
  })

  it('Icon wrapper should change the icon rendered on click', () => {
    render(
      <Input
        type="password"
        value=""
        onChange={onChangeSpy}
      />
    )

    const passwordIconWrapper = screen.getByTestId('input-password-icon')
    const passwordIcon = screen.getByTestId('input-password-font-awesome-icon')

    expect(passwordIcon.getAttribute('data-icon')).toBe('eye-slash')
    fireEvent.click(passwordIconWrapper)
    expect(passwordIcon.getAttribute('data-icon')).toBe('eye')
  })
})

describe('Error message', () => {
  it('Error message should be rendered only when component has error flag', () => {
    render(
      <Input
        type="text"
        value=""
        onChange={onChangeSpy}
        error
        errorMessage="Error message"
      />
    )

    const errorMessage = screen.getByTestId('input-error-message')

    expect(errorMessage).toBeTruthy()
  })
})

describe('setPasswordVisibleHandler', () => {
  let sut: ReturnType<typeof setPasswordVisibleHandler>

  const setPasswordVisibleSpy = jest.fn()
  const setTypeSpy = jest.fn()

  beforeAll(() => {
    sut = setPasswordVisibleHandler({
      passwordVisible: false,
      setPasswordVisible: setPasswordVisibleSpy,
      setType: setTypeSpy
    })
  })

  it('Should call setPasswordVisible with correct params', () => {
    sut()

    expect(setPasswordVisibleSpy).toBeCalledTimes(1)
    expect(setPasswordVisibleSpy).toBeCalledWith(true)
  })

  it('Should call setType with correct params', () => {
    sut()

    expect(setTypeSpy).toBeCalledTimes(1)
    expect(setTypeSpy).toBeCalledWith('text')
  })
})