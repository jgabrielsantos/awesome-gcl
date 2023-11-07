import React from "react"
import { render, screen } from "@testing-library/react"
import { Radio } from "../../../src/components/Radio"

describe('Dynamic rendering', () => {
  describe('Label', () => {
    it('Should render label when prop is passed', () => {
      render(
        <Radio
          id="test"
          size="medium"
          checked
          handleClick={jest.fn()}
          label="Label"
        />
      )

      const label = screen.queryAllByTestId('radio-label')
      expect(label.length).toBe(1)
    })

    it('Should not render label when it\'s undefined', () => {
      render(
        <Radio
          id="test"
          size="medium"
          checked
          handleClick={jest.fn()}
        />
      )

      const label = screen.queryAllByTestId('radio-label')
      expect(label.length).toBe(0)
    })
  })

  describe('Caption', () => {
    it('Should render caption when prop is passed accompanied', () => {
      render(
        <Radio
          id="test"
          size="medium"
          checked
          handleClick={jest.fn()}
          label="Label"
          caption="caption"
        />
      )

      const caption = screen.queryAllByTestId('radio-caption')
      expect(caption.length).toBe(1)
    })

    it('Should not render if it\'s undefined', () => {
      render(
        <Radio
          id="test"
          size="medium"
          checked
          handleClick={jest.fn()}
          label="Label"
        />
      )

      const caption = screen.queryAllByTestId('radio-caption')
      expect(caption.length).toBe(0)
    })

    it('Should not render if label is undefined', () => {
      render(
        <Radio
          id="test"
          size="medium"
          checked
          handleClick={jest.fn()}
          caption="caption"
        />
      )

      const caption = screen.queryAllByTestId('radio-caption')
      expect(caption.length).toBe(0)
    })
  })
})