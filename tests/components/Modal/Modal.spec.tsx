import React from "react";
import { Modal } from '../../../src/components/Modal/index'
import { screen, render } from "@testing-library/react";
import { ModalStyles } from "../../../src/components/Modal/styles";

describe('Modal styles', () => {
  describe('Themes', () => {
    const additionalClasses = {
      wrapper: [],
      dialog: []
    }
    const styles = new ModalStyles(additionalClasses)

    describe('Wrapper', () => {
      it('On truthy isOpen prop', () => {
        const theme = styles.getThemeRules('wrapper', true)

        expect(theme.get('display')).toBe('flex')
      })
      it('On falsy isOpen prop', () => {
        const theme = styles.getThemeRules('wrapper', false)
        
        expect(theme.get('display')).toBe('hidden')
      })
      it('Default styles', () => {
        // Doesn't matter the isOpen prop value as does not affect the listed style rules
        const theme = styles.getThemeRules('wrapper', false)

        expect(theme.get('position')).toBe('fixed')
        expect(theme.get('top')).toBe('top-0')
        expect(theme.get('left')).toBe('left-0')
        expect(theme.get('width')).toBe('w-full')
        expect(theme.get('height')).toBe('h-full')
        expect(theme.get('background-color')).toBe('bg-transparent')
        expect(theme.get('align-items')).toBe('items-center')
        expect(theme.get('justify-content')).toBe('justify-center')
        expect(theme.get('z-index')).toBe('z-0')
      })
    })

    describe('Dialog', () => {
      it('On truthy isOpen prop', () => {
        const theme = styles.getThemeRules('dialog', true)

        expect(theme.get('display')).toBe('block')
      })
      it('On falsy isOpen prop', () => {
        const theme = styles.getThemeRules('dialog', false)

        expect(theme.get('display')).toBe('hidden')
      })
      it('Default styles', () => {
        // Doesn't matter the isOpen prop value as does not affect the listed style rules
        const theme = styles.getThemeRules('dialog', false)

        expect(theme.get('border-size')).toBe('border')
        expect(theme.get('border-type')).toBe('border-solid')
        expect(theme.get('border-color')).toBe('border-grayscale-10')
        expect(theme.get('border-radius')).toBe('rounded-md')
        expect(theme.get('padding')).toBe('p-4')
      })
    })
  })
})
