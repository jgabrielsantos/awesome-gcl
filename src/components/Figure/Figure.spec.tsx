import React from "react"
import { Figure } from "./index"
import { render, screen } from "@testing-library/react"
import 'jest-styled-components'

describe('Figure layout and styles', () => {
  const srcMock = 'https://cctech.io/images/cctech-logo-black.webp'
  const altMock = 'cctech logo'

  it('Should match designs', () => {
    render(
      <Figure
        src={srcMock}
        alt={altMock}
        caption="Convergence Logo"
      />
    )

    const wrapper = screen.getByTestId('figure-wrapper')

    expect(wrapper).toHaveStyleRule('width', '100%')
    expect(wrapper).toHaveStyleRule('height', '100%')

    const image = screen.getByTestId('figure-image')
    expect(image).toHaveStyleRule('width', '100%')
    expect(image).toHaveStyleRule('height', '100%')

    const caption = screen.getByTestId('figure-caption')
    expect(caption).toHaveStyleRule('font-size', '1rem')
  })

  it('Should render figure width based on the prop', () => {
    render(
      <Figure
        src={srcMock}
        alt={altMock}
        width="200px"
      />
    )

    const wrapper = screen.getByTestId('figure-wrapper')

    expect(wrapper).toHaveStyleRule('width', '200px')
  })
})