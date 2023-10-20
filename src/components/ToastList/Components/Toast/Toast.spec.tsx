import React from 'react'
import { Toast } from './index'
import { ToastStyles } from "./styles"
import { ToastTypeEnums } from "./types"
import { fireEvent, render, screen } from "@testing-library/react"

type TestTypePropTypes = {
  type: ToastTypeEnums
  styleRule: string
}

type TestDisplayPropTypes = {
  isOpen: boolean
  styleRule: string
}

describe('Toast styles', () => {
  const additionalClasses: string[] = []
  const styles = new ToastStyles(additionalClasses)
  const testType = ({
    type,
    styleRule
  }: TestTypePropTypes) => {
    expect(styles.getTypeRules(type)).toBe(styleRule)
  }

  const testDisplay = ({
    isOpen,
    styleRule
  }: TestDisplayPropTypes) => {
    expect(styles.getDisplayRules(isOpen)).toBe(styleRule)
  }

  describe('Components', () => {
    it('Toast', () => {
      const theme = styles.getThemeRules('toast')

      expect(theme.get('width')).toBe('w-fit')
      expect(theme.get('max-width')).toBe('max-w-[760px]')
      expect(theme.get('align-items')).toBe('items-center')
      expect(theme.get('justify-content')).toBe('justify-between')
      expect(theme.get('padding-vertical')).toBe('py-2.5')
      expect(theme.get('padding-horizontal')).toBe('px-3')
      expect(theme.get('gap')).toBe('gap-2')
      expect(theme.get('border-radius')).toBe('rounded-lg')
    })
  })

  describe('Types', () => {
    it('Info', () => testType({
      type: 'info',
      styleRule: 'bg-primary-5'
    }))

    it('Success', () => testType({
      type: 'success',
      styleRule: 'bg-support-success-5'
    }))

    it('Fail', () => testType({
      type: 'fail',
      styleRule: 'bg-support-alert-5'
    }))

    it('Warning', () => testType({
      type: 'warning',
      styleRule: 'bg-support-warning-5'
    }))
  })

  describe('Display', () => {
    it('Open', () => testDisplay({
      isOpen: true,
      styleRule: 'flex'
    }))

    it('Not open', () => testDisplay({
      isOpen: false,
      styleRule: 'hidden'
    }))
  })
})

describe('Component logic', () => {
  const handleCloseSpy = jest.fn()
  const childrenMock = 'children'

  it('Should call handleCLick function on toast close button', () => {
    render(
      <Toast
        id='test-toast'
        type='info'
        isOpen={true}
        handleClose={handleCloseSpy}
      >
        {childrenMock}
      </Toast>
    )

    const closeButton = screen.getByTestId('toast-close-icon-test-toast')
    fireEvent.click(closeButton)
    expect(handleCloseSpy).toBeCalledTimes(1)
  })
})
