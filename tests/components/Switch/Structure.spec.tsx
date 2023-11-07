import { render, screen } from "@testing-library/react";
import React from "react";
import { Switch } from "../../../src/components/Switch";

describe('Structure', () => {
  describe('Dynamic Label', () => {
    it('Should render if prop is passed', () => {
      render(
        <Switch
          size="medium"
          checked
          handleClick={jest.fn()}
          label="Label test"
        />
      )

      const labels = screen.queryAllByTestId('switch-label')

      expect(labels.length).toBe(1)
    })

    it('Should not render if prop is missing', () => {
      render(
        <Switch
          size="medium"
          checked
          handleClick={jest.fn()}
        />
      )

      const labels = screen.queryAllByTestId('switch-label')

      expect(labels.length).toBe(0)
    })
  })
})