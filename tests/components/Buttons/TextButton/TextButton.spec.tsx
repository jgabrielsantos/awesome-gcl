import React from "react";
import { fireEvent, render, screen } from '@testing-library/react'
import { TextButton } from "../../../../src/components/Buttons/TextButton/index";
import { ButtonStyles } from "../../../../src/components/Buttons/TextButton/styles";
import Themes from '../../../../src/components/Buttons/TextButton/themes'

const handleClickMock = jest.fn()
const buttonChildMock = 'button rendered for test purposes'

describe('Button handleClick function', () => {
  it('Should be fired only once upon click', () => {
    render(
      <TextButton
        type="button"
        size="medium"
        theme="primary"
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </TextButton>
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
    })
    
    it('Medium', () => {
      const size = styles.getSizeRules('medium')

      expect(size.get('font-size')).toBe('text-sm')
    })

    it('Small', () => {
      const size = styles.getSizeRules('small')

      expect(size.get('font-size')).toBe('text-xs')
    })
  })

  describe('Themes', () => {
    it('Default', () => {
      const theme = Themes.defaultRules()

      expect(theme.get('cursor')).toBe('cursor-pointer')
      expect(theme.get('border-width')).toBe('border-b-2')
      expect(theme.get('border-styled')).toBe('border-solid')
      expect(theme.get('border-color')).toBe('border-transparent')
      expect(theme.get('font-weight')).toBe('font-medium')

      // Disabled state
      expect(theme.get('disabled-color')).toBe('disabled:text-grayscale-60')
    })

    it('Primary', () => {
      const theme = styles.getThemeRules('primary')

      expect(theme.get('text-color')).toBe('text-primary-50')

      // Hover state
      expect(theme.get('hover-border-color')).toBe('hover:border-primary-50')
    })

    it('Secondary', () => {
      const theme = styles.getThemeRules('secondary')

      expect(theme.get('text-color')).toBe('text-grayscale-100')

      // Hover state
      expect(theme.get('hover-border-color')).toBe('hover:border-grayscale-100')
    })

    it('Desctructive', () => {
      const theme = styles.getThemeRules('destructive')

      expect(theme.get('text-color')).toBe('text-support-alert-50')

      // Hover state
      expect(theme.get('hover-border-color')).toBe('hover:border-support-alert-50')
    })

    it('Success', () => {
      const theme = styles.getThemeRules('success')

      expect(theme.get('text-color')).toBe('text-support-success-50')

      // Hover state
      expect(theme.get('hover-border-color')).toBe('hover:border-support-success-50')
    })

    it('Contrast', () => {
      const theme = styles.getThemeRules('contrast')

      expect(theme.get('text-color')).toBe('text-white-100')

      // Hover state
      expect(theme.get('hover-border-color')).toBe('hover:border-white-100')
    })
  })
})

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

describe('Button disabled prop', () => {
  it('Should not fire the handleClick function', () => {
    render(
      <TextButton
        size="medium"
        type="button"
        theme="primary"
        disabled
        handleClick={handleClickMock}
      >
        {buttonChildMock}
      </TextButton>
    )

    const button = screen.getByTestId('awesome-gcl-button-component')
    fireEvent.click(button)
    expect(handleClickMock).toHaveBeenCalledTimes(0)
  })
})
