import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from './index'
import { setPasswordVisibleHandler } from "./hooks";
import { InputStyles } from "./styles";

const onChangeSpy = jest.fn()

describe('Input styles', () => {
  const additionalClasses = {
    wrapper: [],
    label: [],
    input: [],
    passwordButton: [],
    caption: []
  }
  const styles = new InputStyles(additionalClasses)

  describe('Sizes', () => {
    describe('Large', () => {
      it('Label', () => {
        const theme = styles.getSizeRules('large', 'label')

        expect(theme.get('font-size')).toBe('text-base')
      })

      it('Input', () => {
        const theme = styles.getSizeRules('large', 'input')

        expect(theme.get('padding-vertical')).toBe('py-3')
        expect(theme.get('padding-horizontal')).toBe('px-4')
        expect(theme.get('font-size')).toBe('text-base')
      })

      it('Password Button', () => {
        const theme = styles.getSizeRules('large', 'passwordButton')

        expect(theme.get('right')).toBe('right-4')
      })

      it('Caption', () => {
        const theme = styles.getSizeRules('large', 'caption')

        expect(theme.get('font-size')).toBe('text-sm')
      })
    })

    describe('Medium', () => {
      it('Label', () => {
        const theme = styles.getSizeRules('medium', 'label')

        expect(theme.get('font-size')).toBe('text-sm')
      })

      it('Input', () => {
        const theme = styles.getSizeRules('medium', 'input')

        expect(theme.get('padding-vertical')).toBe('py-2.5')
        expect(theme.get('padding-horizontal')).toBe('px-4')
        expect(theme.get('font-size')).toBe('text-sm')
      })

      it('Password Button', () => {
        const theme = styles.getSizeRules('medium', 'passwordButton')

        expect(theme.get('right')).toBe('right-4')
      })

      it('Caption', () => {
        const theme = styles.getSizeRules('medium', 'caption')

        expect(theme.get('font-size')).toBe('text-xs')
      })
    })

    describe('Small', () => {
      it('Label', () => {
        const theme = styles.getSizeRules('small', 'label')

        expect(theme.get('font-size')).toBe('text-xs')
      })

      it('Input', () => {
        const theme = styles.getSizeRules('small', 'input')

        expect(theme.get('padding-vertical')).toBe('py-2')
        expect(theme.get('padding-horizontal')).toBe('px-3')
        expect(theme.get('font-size')).toBe('text-xs')
      })

      it('Password Button', () => {
        const theme = styles.getSizeRules('small', 'passwordButton')

        expect(theme.get('right')).toBe('right-3.5')
      })

      it('Caption', () => {
        const theme = styles.getSizeRules('small', 'caption')

        expect(theme.get('font-size')).toBe('text-xs')
      })
    })
  })

  describe('Themes', () => {
    it('Wrapper', () => {
      const theme = styles.getThemeRules('wrapper')

      expect(theme.get('width')).toBe('w-full')
      expect(theme.get('display')).toBe('flex')
      expect(theme.get('flex-direction')).toBe('flex-col')
      expect(theme.get('align-items')).toBe('items-start')
      expect(theme.get('justify-content')).toBe('justify-center')
      expect(theme.get('gap')).toBe('gap-1.5')
    })
  
    it('Label', () => {
      const theme = styles.getThemeRules('label')

      expect(theme.get('width')).toBe('w-full')
      expect(theme.get('color')).toBe('text-grayscale-100')

      // Disabled state
      expect(theme.get('disabled-color')).toBe('peer-disabled/input:text-grayscale-60')
    })
  
    it('Input Wrapper', () => {
      const theme = styles.getThemeRules('inputWrapper')

      expect(theme.get('position')).toBe('relative')
    })
  
    it('Input', () => {
      const theme = styles.getThemeRules('input')

      expect(theme.get('peer')).toBe('peer/input')
      expect(theme.get('border-width')).toBe('border')
      expect(theme.get('border-style')).toBe('border-solid')
      expect(theme.get('border-color')).toBe('border-grayscale-40')
      expect(theme.get('border-radius')).toBe('rounded-md')
      expect(theme.get('background-color')).toBe('bg-white-100')
      expect(theme.get('color')).toBe('text-grayscale-100')
      expect(theme.get('outline')).toBe('outline-0')

      // Hover state
      expect(theme.get('hover-border-color')).toBe('hover:border-primary-50')

      // Focus state
      expect(theme.get('focus-border-color')).toBe('focus:border-primary-50')

      // Disabled state
      expect(theme.get('disabled-cursor')).toBe('disabled:cursor-not-allowed')
      expect(theme.get('disabled-border-color')).toBe('disabled:border-grayscale-60')
      expect(theme.get('disabled-color')).toBe('disabled:text-grayscale-40')
      expect(theme.get('disabled-background')).toBe('disabled:bg-grayscale-5')

      // Invalid (Alert) state
      expect(theme.get('invalid-border-color')).toBe('invalid:border-support-alert-50')

      // Placeholder state
      expect(theme.get('placeholder-color')).toBe('text-grayscale-80')
      expect(theme.get('placeholder-font-size')).toBe('text-base')

      // Password Icon
      expect(theme.get('after-icon')).toBe('after:content: "\f002"')
    })

    it('Password Button', () => {
      const theme = styles.getThemeRules('passwordButton')

      expect(theme.get('position')).toBe('absolute')
      expect(theme.get('position-vertical')).toBe('inset-y-0')
    })
  
    it('Caption', () => {
      const theme = styles.getThemeRules('caption')

      // Disabled state
      expect(theme.get('disabled-color')).toBe('peer-disabled/input:text-grayscale-60')

      // Invalid state
      expect(theme.get('invalid-color')).toBe('peer-invalid/input:text-support-alert-50')
    })
  })
})

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

describe('setPasswordVisibleHandler', () => {
  let sut: ReturnType<typeof setPasswordVisibleHandler>

  const setPasswordVisibleSpy = jest.fn()
  const setTypeSpy = jest.fn()

  describe('Show Password prop as false', () => {
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

  describe('Show Password prop as true', () => {
    beforeAll(() => {
      sut = setPasswordVisibleHandler({
        passwordVisible: true,
        setPasswordVisible: setPasswordVisibleSpy,
        setType: setTypeSpy
      })
    })

    it('Should call setPasswordVisible with correct params', () => {
      sut()

      expect(setPasswordVisibleSpy).toBeCalledTimes(1)
      expect(setPasswordVisibleSpy).toBeCalledWith(false)
    })

    it('Should call setType with correct params', () => {
      sut()

      expect(setTypeSpy).toBeCalledTimes(1)
      expect(setTypeSpy).toBeCalledWith('password')
    })
  })
})