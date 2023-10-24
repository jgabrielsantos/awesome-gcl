import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from '../../../src/components/Input/index'

const onChangeSpy = jest.fn()

describe('Component types', () => {
  it('Should render type text', () => {
    render(
      <Input
        size="medium"
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
        size="medium"
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
        size="medium"
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
        size="medium"
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
        size="medium"
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
        size="medium"
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
        size="medium"
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

describe('Regex pattern', () => {
  it('Should throw error upon invalid regex', () => {
    const regexError = 'Pattern not acceptable. Please provide a valid regular expression (RegEx)'

    const consoleErrorSpy = jest.spyOn(console, 'error')
    consoleErrorSpy.mockImplementation(() => {})

    try {
      render(
        <Input
          size="medium"
          type="text"
          value=""
          onChange={onChangeSpy}
          pattern="["
        />
      )
    } catch (error: any) {
      expect(error.message).toBe(regexError)
    } finally {
      consoleErrorSpy.mockRestore()
    }
  })
})

describe('Conditional component rendering', () => {
  describe('Label', () => {
    it('Should render', () => {
      render(
        <Input
          size="medium"
          type="text"
          value=""
          onChange={onChangeSpy}
          label="Label"
        />
      )

      const labels = screen.queryAllByTestId('input-label')
      expect(labels.length).toBe(1)
    })

    it('Should not render', () => {
      render(
        <Input
          size="medium"
          type="text"
          value=""
          onChange={onChangeSpy}
        />
      )

      const labels = screen.queryAllByTestId('input-label')
      expect(labels.length).toBe(0)
    })
  })

  describe('Caption', () => {
    it('Should render', () => {
      render(
        <Input
          size="medium"
          type="text"
          value=""
          onChange={onChangeSpy}
          caption='Caption'
        />
      )

      const captions = screen.queryAllByTestId('input-caption')
      expect(captions.length).toBe(1)
    })

    it('Should not render', () => {
      render(
        <Input
          size="medium"
          type="text"
          value=""
          onChange={onChangeSpy}
        />
      )

      const captions = screen.queryAllByTestId('input-caption')
      expect(captions.length).toBe(0)
    })
  })
})
