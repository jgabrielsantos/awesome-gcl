import React from 'react'
import { Toast } from '../../../../../src/components/ToastList/Components/Toast'
import { fireEvent, render, screen } from "@testing-library/react"

describe('Component logic', () => {
  const handleCloseSpy = jest.fn()
  const childrenMock = 'children'

  it('Should call handleCLick function on toast close button', () => {
    render(
      <Toast
        id='test-toast'
        useCase='primary'
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