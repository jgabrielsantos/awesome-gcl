import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { Radio } from "../../../src/components/Radio"

describe('Dynamic rendering', () => {
  describe('Handle Click prop function', () => {
    const handleClickSpy = jest.fn()

    it('Should trigger function on wrapper click', () => {
      render(
        <Radio
          id="test"
          size="medium"
          checked
          handleClick={handleClickSpy}
        />
      )

      const wrapper = screen.getByTestId('radio-wrapper')
      fireEvent.click(wrapper)
      expect(handleClickSpy).toBeCalledTimes(1)
      expect(handleClickSpy).toBeCalledWith('test')
    })

    it('Should not trigger function on wrapper click when component is disabled', () => {
      render(
        <Radio
          id="test"
          size="medium"
          checked
          handleClick={handleClickSpy}
          disabled
        />
      )

      const wrapper = screen.getByTestId('radio-wrapper')
      fireEvent.click(wrapper)
      expect(handleClickSpy).toBeCalledTimes(0)
    })
  })
})
