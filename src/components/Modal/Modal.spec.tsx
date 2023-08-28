import React from "react";
import { Modal } from './index'
import { screen, render } from "@testing-library/react";
import 'jest-styled-components'
import { colors } from "../../styles";
import { toRem } from "../../utils";

describe('Component design', () => {
  it('Modal', () => {
    render(
      <Modal
        isOpen
      >
        content
      </Modal>
    )

    const modal = screen.getByTestId('modal')

    expect(modal).toHaveStyleRule('position', 'absolute')
    expect(modal).toHaveStyleRule('left', '50%')
    expect(modal).toHaveStyleRule('top', '50%')
    expect(modal).toHaveStyleRule('transform', 'translate(-50%, -50%)')
    expect(modal).toHaveStyleRule('display', 'flex')
    expect(modal).toHaveStyleRule('flex-direction', 'column')
    expect(modal).toHaveStyleRule('align-items', 'center')
    expect(modal).toHaveStyleRule('justify-content', 'center')
    expect(modal).toHaveStyleRule('border', `1px solid ${colors.grayscale[10]}`)
    expect(modal).toHaveStyleRule('border-radius', toRem(6))
  })

  it('Modal should not show up on false prop', () => {
    render(
      <Modal
        isOpen={false}
      >
        content
      </Modal>
    )
  
    const modal = screen.getByTestId('modal')

    expect(modal).toHaveStyleRule('display', 'none')
  })
})