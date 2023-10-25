import React from "react";
import { screen, render } from "@testing-library/react";
import { Checkbox } from "../../../src/components/Checkbox";

const handleClickSpy = jest.fn()

describe('Component logic', () => {
  describe('Label', () => {
    it('Should render label', () => {
      render(
        <Checkbox
          size="medium"
          label="LAbel"
          checked={false}
          handleClick={handleClickSpy}
        />
      )

      const label = screen.queryAllByTestId('checkbox-label')

      expect(label.length).toBe(1)
    })

    it('Should not render mark svg icon', () => {
      render(
        <Checkbox
          size="medium"
          checked={false}
          handleClick={handleClickSpy}
        />
      )

      const label = screen.queryAllByTestId('checkbox-label')

      expect(label.length).toBe(0)
    })
  })

  describe('SVG Icon', () => {
    it('Should render mark svg icon', () => {
      render(
        <Checkbox
          size="medium"
          checked={true}
          handleClick={handleClickSpy}
        />
      )

      const mark = screen.queryAllByTestId('checkbox-mark')

      expect(mark.length).toBe(1)
    })

    it('Should not render mark svg icon', () => {
      render(
        <Checkbox
          size="medium"
          checked={false}
          handleClick={handleClickSpy}
        />
      )

      const mark = screen.queryAllByTestId('checkbox-mark')

      expect(mark.length).toBe(0)
    })
  })
})