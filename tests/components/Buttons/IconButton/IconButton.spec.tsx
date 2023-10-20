import React from "react";
import { fireEvent, render, screen } from '@testing-library/react'
import { IconButton } from "../../../../src/components/Buttons/IconButton/index";
import { ButtonStyles } from "../../../../src/components/Buttons/IconButton/styles";
import Themes from '../../../../src/components/Buttons/IconButton/themes'

const handleClickMock = jest.fn()
const buttonChildMock = 'button rendered for test purposes'

describe('Button handleClick function', () => {
  it('Should be fired only once upon click', () => {
    render(
      <IconButton
        type="button"
        size="medium"
        theme="primary"
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </IconButton>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    fireEvent.click(button)
    expect(handleClickMock).toHaveBeenCalledTimes(1)
  })
})

describe('Button styles', () => {
  const additionalClasses: string[] = []
  const styles = new ButtonStyles(additionalClasses)

  describe('Sizes', () => {
    it('Large', () => {
      const size = styles.getSizeRules('large')

      expect(size.get('font-size')).toBe('text-base')
      expect(size.get('padding')).toBe('p-3')
    })
    
    it('Medium', () => {
      const size = styles.getSizeRules('medium')

      expect(size.get('font-size')).toBe('text-sm')
      expect(size.get('padding')).toBe('p-2.5')
    })

    it('Small', () => {
      const size = styles.getSizeRules('small')

      expect(size.get('font-size')).toBe('text-xs')
      expect(size.get('padding')).toBe('p-2')
    })
  })

  describe('Themes', () => {
    it('Default', () => {
      const theme = Themes.defaultRules()

      expect(theme.get('cursor')).toBe('cursor-pointer')
      expect(theme.get('width')).toBe('w-fit')
      expect(theme.get('height')).toBe('h-fit')
      expect(theme.get('display')).toBe('flex')
      expect(theme.get('flex-wrap')).toBe('flex-wrap')
      expect(theme.get('justify-content')).toBe('justify-center')
      expect(theme.get('align-items')).toBe('items-center')
      expect(theme.get('border-width')).toBe('border')
      expect(theme.get('border-styled')).toBe('border-solid')
      expect(theme.get('border-radius')).toBe('rounded-md')
      expect(theme.get('font-weight')).toBe('font-medium')

      // Disabled state
      expect(theme.get('disabled-cursor')).toBe('disabled:cursor-not-allowed')
      expect(theme.get('disabled-border-color')).toBe('disabled:border-grayscale-40')
      expect(theme.get('disabled-color')).toBe('disabled:text-grayscale-60')
    })

    it('Primary', () => {
      const theme = styles.getThemeRules('primary')

      expect(theme.get('border-color')).toBe('border-primary-50')
      expect(theme.get('text-color')).toBe('text-white-100')
      expect(theme.get('background-color')).toBe('bg-primary-50')

      // Hover state
      expect(theme.get('hover-border-color')).toBe('hover:border-primary-100')
      expect(theme.get('hover-background-color')).toBe('hover:bg-primary-100')

      // Disabled state
      expect(theme.get('disabled-background-color')).toBe('disabled:bg-grayscale-5')
    })

    it('Secondary', () => {
      const theme = styles.getThemeRules('secondary')

      expect(theme.get('border-color')).toBe('border-primary-50')
      expect(theme.get('text-color')).toBe('text-primary-50')
      expect(theme.get('background-color')).toBe('bg-white-100')

      // Hover state
      expect(theme.get('hover-border-color')).toBe('hover:border-primary-50')
      expect(theme.get('hover-background-color')).toBe('hover:bg-primary-0')

      // Disabled state
      expect(theme.get('disabled-background-color')).toBe('disabled:bg-white-0')
    })

    it('Tertiary', () => {
      const theme = styles.getThemeRules('tertiary')

      expect(theme.get('border-color')).toBe('border-grayscale-40')
      expect(theme.get('text-color')).toBe('text-grayscale-100')
      expect(theme.get('background-color')).toBe('bg-white-100')

      // Hover state
      expect(theme.get('hover-border-color')).toBe('hover:border-grayscale-100')
      expect(theme.get('hover-background-color')).toBe('hover:bg-white-100')

      // Disabled state
      expect(theme.get('disabled-background-color')).toBe('disabled:bg-white-0')
    })

    describe('Destructive', () => {
      it('Primary', () => {
        const theme = styles.getThemeRules('destructive-primary')

        expect(theme.get('border-color')).toBe('border-support-alert-50')
        expect(theme.get('text-color')).toBe('text-white-100')
        expect(theme.get('background-color')).toBe('bg-support-alert-50')

        // Hover state
        expect(theme.get('hover-border-color')).toBe('hover:border-support-alert-100')
        expect(theme.get('hover-background-color')).toBe('hover:bg-support-alert-100')

        // Disabled state
        expect(theme.get('disabled-background-color')).toBe('disabled:bg-grayscale-5')
      })

      it('Secondary', () => {
        const theme = styles.getThemeRules('destructive-secondary')

        expect(theme.get('border-color')).toBe('border-support-alert-50')
        expect(theme.get('text-color')).toBe('text-support-alert-50')
        expect(theme.get('background-color')).toBe('bg-white-100')

        // Hover state
        expect(theme.get('hover-border-color')).toBe('hover:border-support-alert-50')
        expect(theme.get('hover-background-color')).toBe('hover:bg-support-alert-5')

        // Disabled state
        expect(theme.get('disabled-background-color')).toBe('disabled:bg-white-0')
      })
    })

    describe('Success', () => {
      it('Primary', () => {
        const theme = styles.getThemeRules('success-primary')

        expect(theme.get('border-color')).toBe('border-support-success-50')
        expect(theme.get('text-color')).toBe('text-white-100')
        expect(theme.get('background-color')).toBe('bg-support-success-50')

        // Hover state
        expect(theme.get('hover-border-color')).toBe('hover:border-support-success-100')
        expect(theme.get('hover-background-color')).toBe('hover:bg-support-success-100')

        // Disabled state
        expect(theme.get('disabled-background-color')).toBe('disabled:bg-grayscale-5')
      })

      it('Secondary', () => {
        const theme = styles.getThemeRules('success-secondary')

        expect(theme.get('border-color')).toBe('border-support-success-50')
        expect(theme.get('text-color')).toBe('text-support-success-50')
        expect(theme.get('background-color')).toBe('bg-white-100')

        // Hover state
        expect(theme.get('hover-border-color')).toBe('hover:border-support-success-50')
        expect(theme.get('hover-background-color')).toBe('hover:bg-support-success-5')

        // Disabled state
        expect(theme.get('disabled-background-color')).toBe('disabled:bg-white-0')
      })
    })

    describe('Contrast', () => {
      it('Primary', () => {
        const theme = styles.getThemeRules('contrast-primary')

        expect(theme.get('border-color')).toBe('border-primary-50')
        expect(theme.get('text-color')).toBe('text-primary-50')
        expect(theme.get('background-color')).toBe('bg-white-100')

        // Hover state
        expect(theme.get('hover-border-color')).toBe('hover:border-primary-50')
        expect(theme.get('hover-background-color')).toBe('hover:bg-primary-0')

        // Disabled state
        expect(theme.get('disabled-background-color')).toBe('disabled:bg-grayscale-5')
      })

      it('Secondary', () => {
        const theme = styles.getThemeRules('contrast-secondary')

        expect(theme.get('border-color')).toBe('border-white-100')
        expect(theme.get('text-color')).toBe('text-white-100')
        expect(theme.get('background-color')).toBe('bg-grayscale-100')

        // Hover state
        expect(theme.get('hover-border-color')).toBe('hover:border-white-100')
        expect(theme.get('hover-background-color')).toBe('hover:bg-white-40')

        // Disabled state
        expect(theme.get('disabled-background-color')).toBe('disabled:bg-white-0')
      })
    })
  })
})

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

describe('Button disabled prop', () => {
  it('Should not fire the handleClick function', () => {
    render(
      <IconButton
        size="medium"
        type="button"
        theme="primary"
        disabled
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </IconButton>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    fireEvent.click(button)
    expect(handleClickMock).toHaveBeenCalledTimes(0)
  })
})
