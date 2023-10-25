import React from "react"
import { Figure } from "../../../src/components/Figure"
import { render, screen } from "@testing-library/react"

const srcMock = 'https://cctech.io/images/cctech-logo-black.webp'
const altMock = 'cctech logo'
const captionMock = 'figure caption'

describe('Figure layout', () => {
  it('Should not render caption component', () => {
    render(
      <Figure
        src={srcMock}
        alt={altMock}
      />
    )

    const caption = screen.queryAllByTestId('figure-caption')
    expect(caption.length).toBe(0)
  })

  it('Should render caption component', () => {
    render(
      <Figure
        src={srcMock}
        alt={altMock}
        caption={captionMock}
      />
    )

    const caption = screen.queryAllByTestId('figure-caption')
    expect(caption.length).toBe(1)
  })
})
