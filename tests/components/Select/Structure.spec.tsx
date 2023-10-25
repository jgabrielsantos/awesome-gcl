import React from "react"
import { render, screen } from "@testing-library/react"
import { Select } from "../../../src/components/Select"
import { faCloud } from "@fortawesome/free-solid-svg-icons"

const labelMock = 'Label'
const optionsMock = [
  {
    label: 'option 0',
    value: 0
  },
  {
    label: 'option 1',
    value: 'option'
  },
  {
    label: 'option 2',
    value: null
  },
]
const onChangeSpy = jest.fn()

describe('Icon options', () => {
  it('Default icon', () => {
    render(
      <Select
        size="medium"
        options={optionsMock}
        onChange={onChangeSpy}
      />
    )

    const defaultIcon = screen.getByTestId('select-default-icon')
    expect(defaultIcon).toBeTruthy()
  })

  it('Default icon', () => {
    render(
      <Select
        size="medium"
        options={optionsMock}
        onChange={onChangeSpy}
        icon={faCloud}
      />
    )

    const customIcon = screen.getByTestId('select-custom-icon')
    expect(customIcon).toBeTruthy()
  })
})

describe('Label', () => {
  it('Should render label componenr', () => {
    render(
      <Select
        size="medium"
        options={optionsMock}
        onChange={onChangeSpy}
        label="label"
      />
    )

    const label = screen.queryAllByTestId('select-label')
    expect(label.length).toBe(1)
  })

  it('Should not render label componenr', () => {
    render(
      <Select
        size="medium"
        options={optionsMock}
        onChange={onChangeSpy}
      />
    )

    const label = screen.queryAllByTestId('select-label')
    expect(label.length).toBe(0)
  })
})

describe('Input', () => {
  it('Should have empty string as value if selected prop is not passed', () => {
    render(
      <Select
        size="medium"
        options={optionsMock}
        onChange={onChangeSpy}
      />
    )

    const input = screen.getByTestId('select-input') as HTMLInputElement
    expect(input.value).toBe('')
  })

  it('Should have label from selected object if selected prop is passed', () => {
    render(
      <Select
        size="medium"
        options={optionsMock}
        onChange={onChangeSpy}
        selected={{
          label: 'selected',
        }}
      />
    )

    const input = screen.getByTestId('select-input') as HTMLInputElement
    expect(input.value).toBe('selected')
  })
})
