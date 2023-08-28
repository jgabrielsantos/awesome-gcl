import React from "react";
import 'jest-styled-components'
import { render, screen, fireEvent } from "@testing-library/react";
import { Toast } from './index'
import { toRem } from "../../utils";
import { colors } from "../../styles";
import { ToastComponentPropTypes } from "./types";

const handleClickSpy = jest.fn()

const toastsMock: ToastComponentPropTypes[] = [
  {
    id: 'success',
    isOpen: true,
    handleClose: handleClickSpy,
    theme: 'success',
    children: <p>Success</p>
  },
  {
    id: 'fail',
    isOpen: true,
    handleClose: handleClickSpy,
    theme: 'fail',
    children: <p>fail</p>
  },
  {
    id: 'warning',
    isOpen: true,
    handleClose: handleClickSpy,
    theme: 'warning',
    children: <p>warning</p>
  },
  {
    id: 'info',
    isOpen: true,
    handleClose: handleClickSpy,
    theme: 'info',
    children: <p>info</p>
  },
]

describe('Component design', () => {
  it('Wrapper', () => {
    render(
      <Toast
        toastList={toastsMock}
      />
    )

    const wrapper = screen.getByTestId('toast-wrapper')

    expect(wrapper).toHaveStyleRule('position', 'fixed')
    expect(wrapper).toHaveStyleRule('height', 'fit-content')
    expect(wrapper).toHaveStyleRule('display', 'flex')
    expect(wrapper).toHaveStyleRule('flex-direction', 'column')
    expect(wrapper).toHaveStyleRule('align-items', 'center')
    expect(wrapper).toHaveStyleRule('justify-content', 'center')
    expect(wrapper).toHaveStyleRule('gap', toRem(8))
    expect(wrapper).toHaveStyleRule('left', '50%')
    expect(wrapper).toHaveStyleRule('bottom', '1rem')
    expect(wrapper).toHaveStyleRule('transform', 'translateX(-50%)')
  })

  it('Toasts', () => {
    render(
      <Toast
        toastList={toastsMock}
      />
    )

    const successToast = screen.getByTestId('toast-success')

    expect(successToast).toHaveStyleRule('width', 'fit-content')
    expect(successToast).toHaveStyleRule('max-width', '760px')
    expect(successToast).toHaveStyleRule('display', 'flex')
    expect(successToast).toHaveStyleRule('align-items', 'center')
    expect(successToast).toHaveStyleRule('justify-content', 'space-between')
    expect(successToast).toHaveStyleRule('padding',  `${toRem(10)} ${toRem(12)}`)
    expect(successToast).toHaveStyleRule('gap',  toRem(6))
    expect(successToast).toHaveStyleRule('border-radius',  toRem(6))
    expect(successToast).toHaveStyleRule('background-color', colors.support.success[5])

    const failToast = screen.getByTestId('toast-fail')
    expect(failToast).toHaveStyleRule('background-color', colors.support.alert[5])

    const warningToast = screen.getByTestId('toast-warning')
    expect(warningToast).toHaveStyleRule('background-color', colors.support.warning[5])

    const infoToast = screen.getByTestId('toast-info')
    expect(infoToast).toHaveStyleRule('background-color', colors.primary[5])
  })

  it('Close button', () => {
    render(
      <Toast
        toastList={toastsMock}
      />
    )

    const closeButton = screen.getByTestId('toast-close-button-info')

    expect(closeButton).toHaveStyleRule('padding', '0')
    expect(closeButton).toHaveStyleRule('cursor', 'pointer')

    const closeButtonIcon = screen.getByTestId('toast-close-icon-info')
    expect(closeButtonIcon.getAttribute('data-icon')).toBe('xmark')
  })
})

describe('Component logic', () => {
  it('Should call handleCLick function on toast close button', () => {
    render(
      <Toast
        toastList={toastsMock}
      />
    )

    const closeButton = screen.getByTestId('toast-close-button-info')
    fireEvent.click(closeButton)
    expect(handleClickSpy).toBeCalledTimes(1)
  })
})