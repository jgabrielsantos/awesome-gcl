import React from "react";
import * as Styled from './styles'
import { SelectMultiPropTypes } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "../Checkbox";

export const SelectMulti = ({
  options,
  addOption,
  removeOption,
  label,
  selected,
  disabled,
  placeholder,
  className
}: SelectMultiPropTypes) => {
  return (
    <Styled.Wrapper
      className={className}
      data-testid='select-multi-wrapper'
    >
      {label && (
        <Styled.LabelStyled
          data-testid='select-multi-label'
        >
          {label}
        </Styled.LabelStyled>
      )}
      <Styled.ListWrapper
        onClick={() => null} // TODO: toggle options list
        disabled={disabled}
        data-testid='select-multi-select-list-wrapper'
      >
        {placeholder && selected?.length === 0 && (
          <Styled.PlaceholderStyled
          data-testid='select-multi-placeholder'
          >
            {placeholder}
          </Styled.PlaceholderStyled>
        )}
        <Styled.SelectedListStyled
          data-testid='select-multi-selected-list'
        >
          {selected?.map(item => (
            <Styled.SelectedStyled
              key={item.id}
              data-testid='select-multi-selected-item'
            >
              {item.label}
              <FontAwesomeIcon
                onClick={() => removeOption(item)}
                icon={faTimes}
                data-testid='select-multi-remove-icon'
              />
            </Styled.SelectedStyled>
          ))}
        </Styled.SelectedListStyled>
        <FontAwesomeIcon
          icon={faChevronDown}
          data-testid='select-multi-toggle-options-icon'
        />
      </Styled.ListWrapper>

      <Styled.OptionListStyled
        isOpen
        data-testid='seelct-multi-option-list'
      >
        {options.map(option => (
          <Styled.OptionItemStyled
            value={option.id}
            onClick={() => selected?.find(selected => selected.id === option.id) ? removeOption(option) : addOption(option)}
          >
            <Checkbox
              checked={selected?.find(selected => selected.id === option.id) ? true : false || false}
              handleClick={() => null}
              label={option.label}
            />
          </Styled.OptionItemStyled>
        ))}
      </Styled.OptionListStyled>
    </Styled.Wrapper>
  )
}