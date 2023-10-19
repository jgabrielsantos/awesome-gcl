import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./index";
import { CheckboxStyles } from "./styles";

const handleClickSpy = jest.fn()

describe('Component design', () => {
  const additionalClasses = {
    wrapper: [],
    label: [],
    icon: [],
    input: []
  }
  const styles = new CheckboxStyles(additionalClasses)

  describe('Sizes', () => {
    describe('Large', () => {
      it('Input', () => {
        const size = styles.getSizeRules('large', 'input')

        expect(size.get('width')).toBe('w-6')
        expect(size.get('height')).toBe('h-6')
      })

      it('Label', () => {
        const size = styles.getSizeRules('large', 'label')

        expect(size.get('font-size')).toBe('text-base')
      })

      it('Icon', () => {
        const size = styles.getSizeRules('large', 'icon')

        expect(size.get('left')).toBe('left-2px')
        expect(size.get('height')).toBe('h-5')
        expect(size.get('width')).toBe('w-5')
      })
    })

    describe('Medium', () => {
      it('Input', () => {
        const size = styles.getSizeRules('medium', 'input')

        expect(size.get('width')).toBe('w-5')
        expect(size.get('height')).toBe('h-5')
      })

      it('Label', () => {
        const size = styles.getSizeRules('medium', 'label')

        expect(size.get('font-size')).toBe('text-sm')
      })

      it('Icon', () => {
        const size = styles.getSizeRules('medium', 'icon')

        expect(size.get('left')).toBe('left-0.5')
        expect(size.get('height')).toBe('h-4')
        expect(size.get('width')).toBe('w-4')
      })
    })

    describe('Small', () => {
      it('Input', () => {
        const size = styles.getSizeRules('small', 'input')

        expect(size.get('width')).toBe('w-4')
        expect(size.get('height')).toBe('h-4')
      })

      it('Label', () => {
        const size = styles.getSizeRules('small', 'label')

        expect(size.get('font-size')).toBe('text-xs')
      })

      it('Icon', () => {
        const size = styles.getSizeRules('small', 'icon')

        expect(size.get('left')).toBe('left-2px')
        expect(size.get('height')).toBe('h-3')
        expect(size.get('width')).toBe('w-3')
      })
    })
  })

  describe('Themes', () => {
    it('Wrapper', () => {
      const theme = styles.getThemeRules('wrapper')

      expect(theme.get('display')).toBe('flex')
      expect(theme.get('flex-shrink')).toBe('shrink-0')
      expect(theme.get('justify-content')).toBe('justify-center')
      expect(theme.get('align-items')).toBe('items-center')
      expect(theme.get('gap')).toBe('gap-1.5')
      expect(theme.get('position')).toBe('relative')
    })
  
    it('Input', () => {
      const theme = styles.getThemeRules('input')

      expect(theme.get('cursor')).toBe('cursor-pointer')
      expect(theme.get('border-width')).toBe('border')
      expect(theme.get('border-style')).toBe('border-solid')
      expect(theme.get('border-color')).toBe('border-grayscale-40')
      expect(theme.get('border-radius')).toBe('rounded')
      expect(theme.get('background-color')).toBe('bg-white-100')
      expect(theme.get('appearance')).toBe('appearance-none')

      // Checked state
      expect(theme.get('checked-border-color')).toBe('checked:border-primary-50')
      expect(theme.get('checked-background-color')).toBe('checked:bg-primary-50')

      // Hover state
      expect(theme.get('hover-border-color')).toBe('hover:border-primary-50')
      expect(theme.get('hover-background-color')).toBe('hover:bg-primary-0')

      // Disabled state
      expect(theme.get('disabled-cursor')).toBe('disabled:cursor-not-allowed')
      expect(theme.get('disabled-border-color')).toBe('disabled:border-grayscale-40')
      expect(theme.get('disabled-background-color')).toBe('disabled:bg-grayscale-5')

      // Combined states for hover while checked or while disabled
      expect(theme.get('combined-hover-checked-border-color')).toBe('hover:checked:border-primary-50')
      expect(theme.get('combined-hover-checked-background-color')).toBe('hover:checked:bg-primary-50')
      expect(theme.get('combined-hover-disabled-border-color')).toBe('hover:disabled:border-grayscale-40')
      expect(theme.get('combined-hover-disabled-background-color')).toBe('hover:disabled:bg-grayscale-40')
      expect(theme.get('combined-checked-disabled-background-color')).toBe('checked:disabled:bg-grayscale-40')
    })
  
    it('Icon', () => {
      const theme = styles.getThemeRules('icon')

      expect(theme.get('cursor')).toBe('cursor-pointer')
      expect(theme.get('position')).toBe('absolute')
      expect(theme.get('color')).toBe('text-white-100')
      expect(theme.get('flex-shrink')).toBe('shrink-0')
    })
  
    it('Label', () => {
      const theme = styles.getThemeRules('label')

      expect(theme.get('cursor')).toBe('cursor-pointer')
    })
  })

})

describe('Component logic', () => {
  it('Should call the prop function when input is clicked', () => {
    render(
      <Checkbox
        size="medium"
        checked={false}
        handleClick={handleClickSpy}
      />
    )

    const input = screen.getByTestId('checkbox-input')

    fireEvent.click(input)

    expect(handleClickSpy).toBeCalledTimes(1)
  })
})