import React from "react"
import { Figure } from "../../../src/components/Figure/index"
import { render, screen } from "@testing-library/react"
import { FigureStyles } from "../../../src/components/Figure/styles"

const srcMock = 'https://cctech.io/images/cctech-logo-black.webp'
const altMock = 'cctech logo'
const captionMock = 'figure caption'

describe('Figure styles', () => {
  const additionalClasses = {
    figure: [],
    image: [],
    caption: []
  }
  const styles = new FigureStyles(additionalClasses)

  describe('Themes', () =>{
    it('Figure', () => {
      const theme = styles.getThemeRules('figure')

      expect(theme.get('width')).toBe('w-full')
      expect(theme.get('height')).toBe('h-full')
    })

    it('Image', () => {
      const theme = styles.getThemeRules('image')

      expect(theme.get('width')).toBe('w-full')
      expect(theme.get('height')).toBe('h-full')
    })

    it('Caption', () => {
      const theme = styles.getThemeRules('caption')

      expect(theme.get('font-size')).toBe('text-base')
    })
  })
})

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