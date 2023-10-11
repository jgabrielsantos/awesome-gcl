import React from "react";
import * as Styled from './styles'
import { SelectMultiPropTypes } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "../Checkbox";
import { useSelectMulti } from "./hooks";

export const SelectMulti = ({
  options,
  addOption,
  removeOption,
  label,
  selected,
  disabled = false,
  size,
  placeholder,
}: SelectMultiPropTypes) => {
  const hook = useSelectMulti({
    selectedList: selected || [],
    disabled
  })

  return (
    <Styled.Wrapper
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
        onClick={hook.hookSetIsOptionListVisible}
        disabled={disabled}
        data-testid='select-multi-select-list-wrapper'
      >
        {placeholder && (selected?.length === 0 || selected === undefined) && (
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
              onClick={(event) => event.stopPropagation()}
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
          icon={hook.hookIsOptionListVisible ? faChevronUp : faChevronDown}
          data-testid='select-multi-toggle-options-list-icon'
        />
      </Styled.ListWrapper>

      <Styled.OptionListStyled
        isOpen={hook.hookIsOptionListVisible}
        data-testid='select-multi-options-list'
      >
        {options.map(option => (
          <Styled.OptionItemStyled
            key={option.id}
            value={option.id}
            onClick={() => hook.hookMarkCheckbox(option) ? removeOption(option) : addOption(option)}
            data-testid='select-multi-options-item'
          >
            <Checkbox
              size={size}
              checked={hook.hookMarkCheckbox(option) ? true : false || false}
              label={option.label}
            />
          </Styled.OptionItemStyled>
        ))}
      </Styled.OptionListStyled>
    </Styled.Wrapper>
  )
}