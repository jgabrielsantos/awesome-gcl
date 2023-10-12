import React from "react";
import { SelectStyles } from './styles'
import { SelectMultiPropTypes } from "./types";
import { Checkbox } from "../Checkbox";
import { useSelectMulti } from "./hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faTimes } from "@fortawesome/free-solid-svg-icons";

export const SelectMulti = ({
  options,
  addOption,
  removeOption,
  label,
  selected,
  disabled = false,
  size,
  placeholder,
  additionalClasses = {
    wrapper: [],
    label: [],
    input: [],
    placeholder: [],
    selectedItem: [],
    selectedList: [],
    optionItem: [],
    optionList: []
  }
}: SelectMultiPropTypes) => {
  const hook = useSelectMulti({
    selectedList: selected || [],
    disabled
  })

  const styles = new SelectStyles(additionalClasses)
  const {
    wrapperClass,
    labelClass,
    inputClass,
    placeholderClass,
    selectedItemClass,
    selectedListClass,
    optionItemClass,
    optionListClass
  } = styles.buildStyleRules({
    disabled,
    size,
    isOpen: hook.hookIsOptionListVisible
  })

  return (
    <div
      className={wrapperClass}
      data-testid='select-multi-wrapper'
    >
      {label && (
        <label
          className={labelClass}
          data-testid='select-multi-label'
        >
          {label}
        </label>
      )}
      <div
        className={inputClass}
        onClick={hook.hookSetIsOptionListVisible}
        data-testid='select-multi-select-list-wrapper'
      >
        {placeholder && (selected?.length === 0 || selected === undefined) && (
          <p
            className={placeholderClass}
            data-testid='select-multi-placeholder'
          >
            {placeholder}
          </p>
        )}
        <div
          className={selectedListClass}
          data-testid='select-multi-selected-list'
        >
          {selected?.map(item => (
            <div
              className={selectedItemClass}
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
            </div>
          ))}
        </div>
        <FontAwesomeIcon
          icon={hook.hookIsOptionListVisible ? faChevronUp : faChevronDown}
          data-testid='select-multi-toggle-options-list-icon'
        />
      </div>

      <ul
        className={optionListClass}
        data-testid='select-multi-options-list'
      >
        {options.map(option => (
          <li
            className={optionItemClass}
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
          </li>
        ))}
      </ul>
    </div>
  )
}