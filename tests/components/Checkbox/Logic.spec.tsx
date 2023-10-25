import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { Checkbox } from "../../../src/components/Checkbox";

const handleClickSpy = jest.fn()

describe('Component logic', () => {
  it('Should call the prop function when input is clicked', () => {
    render(
      <Checkbox
        size="medium"
        checked={false}
        handleClick={handleClickSpy}
      />
    )

    const input = screen.getByTestId('checkbox-input')

    fireEvent.click(input)

    expect(handleClickSpy).toBeCalledTimes(1)
  })
})