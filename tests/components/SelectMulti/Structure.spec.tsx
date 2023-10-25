import React from "react";
import { render, screen } from "@testing-library/react";
import { SelectMulti } from "../../../src/components/SelectMulti";

const optionsMock = [
  {
    id: '0',
    label: 'option 0'
  },
  {
    id: '1',
    label: 'option 1'
  },
  {
    id: '2',
    label: 'option 2'
  },
  {
    id: '3',
    label: 'option 3'
  },
]
const addOptionSpy = jest.fn()
const removeOptionSpy = jest.fn()

describe('Dynamic components', () => {
  describe('Label', () => {
    it('Should not render label component on undefined prop', () => {
      render(
        <SelectMulti
          size="medium"
          options={optionsMock}
          addOption={addOptionSpy}
          removeOption={removeOptionSpy}
        />
      )

      const label = screen.queryAllByTestId('select-multi-label')
      expect(label.length).toBe(0)
    })

    it('Should not render label component on empty string prop', () => {
      render(
        <SelectMulti
          size="medium"
          label=""
          options={optionsMock}
          addOption={addOptionSpy}
          removeOption={removeOptionSpy}
        />
      )

      const label = screen.queryAllByTestId('select-multi-label')
      expect(label.length).toBe(0)
    })

    it('Should render label component on valid prop', () => {
      render(
        <SelectMulti
          size="medium"
          label="Label"
          options={optionsMock}
          addOption={addOptionSpy}
          removeOption={removeOptionSpy}
        />
      )

      const label = screen.queryAllByTestId('select-multi-label')
      expect(label.length).toBe(1)
    })
  })
  describe('Placeholder', () => {
    it('Should render placeholder on undefined selected items list', () => {
      render(
        <SelectMulti
          size="medium"
          placeholder="Placeholder"
          options={optionsMock}
          addOption={addOptionSpy}
          removeOption={removeOptionSpy}
        />
      )

      const placeholder = screen.queryAllByTestId('select-multi-placeholder')
      expect(placeholder.length).toBe(1)
    })

    it('Should render placeholder on empty selected items list', () => {
      render(
        <SelectMulti
          size="medium"
          placeholder="Placeholder"
          selected={[]}
          options={optionsMock}
          addOption={addOptionSpy}
          removeOption={removeOptionSpy}
        />
      )

      const placeholder = screen.queryAllByTestId('select-multi-placeholder')
      expect(placeholder.length).toBe(1)
    })

    it('Should not render placeholder on populated selected items list', () => {
      render(
        <SelectMulti
          size="medium"
          placeholder="Placeholder"
          selected={[optionsMock[0]]}
          options={optionsMock}
          addOption={addOptionSpy}
          removeOption={removeOptionSpy}
        />
      )

      const placeholder = screen.queryAllByTestId('select-multi-placeholder')
      expect(placeholder.length).toBe(0)
    })
  })

  describe('Selected Item', () => {
    it('Should not render selected item on empty selected item list', () => {
      render(
        <SelectMulti
          size="medium"
          options={optionsMock}
          addOption={addOptionSpy}
          removeOption={removeOptionSpy}
        />
      )

      const item = screen.queryAllByTestId('select-multi-selected-item')
      expect(item.length).toBe(0)
    })

    it('Should render selected item on populated selected items list', () => {
      render(
        <SelectMulti
          size="medium"
          selected={[optionsMock[0]]}
          options={optionsMock}
          addOption={addOptionSpy}
          removeOption={removeOptionSpy}
        />
      )

      const item = screen.queryAllByTestId('select-multi-selected-item')
      expect(item.length).toBe(1)
    })
  })
})
