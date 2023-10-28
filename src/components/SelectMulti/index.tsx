import React from "react";
import { SelectMultiStyles } from './styles'
import { SelectMultiPropTypes } from "./types";
import { Checkbox } from "../Checkbox";
import { useSelectMulti } from "./hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faTimes } from "@fortawesome/free-solid-svg-icons";

/**
 * Select component
 * 
 * @param {SelectPropTypes} props
 * @property {ListItemPropTypes[]} props.options - List of options to be selected
 * @property {function} props.addOption - Function triggered when an option item is clicked and it is not found in the selected array
 * @param {ListItemPropTypes} props.addOption.option - option item clicked
 * @property {function} props.removeOption - Function triggered when an option item is clicked and it is found in the selected array
 * @param {ListItemPropTypes} props.removeOption.option - option item clicked
 * @property {string} [props.label] - Determines the value of label and if it should be rendered
 * @property {ListItemPropTypes[]} [props.selected] - Determines the value shown in the input
 * @property {boolean} [props.disabled] - Defines the input background color and disables the input wrapper function
 * @property {string} [props.placeholder] - Determines the value of select-multi-placeholder p HTML tag and if it should be rendered
 * @property {GSizeEnum} props.size - Defines label, input and selected item font size, input, selected item, selected list, and option list gap and padding
 * @property {SelectAdditionalClassesPropTypes} [props.additionalClasses] - Object for additional css classes to each HTML tag
 * @property {string[]} [additionalClasses.wrapper] - CSS classes for select-multi-wrapper div HTML tag
 * @property {string[]} [additionalClasses.label] - CSS classes for select-multi-label label HTML tag
 * @property {string[]} [additionalClasses.input] - CSS classes for select-multi-select-list-wrapper div HTML tag
 * @property {string[]} [additionalClasses.placeholder] - CSS classes for select-multi-placeholder p HTML tag
 * @property {string[]} [additionalClasses.selectedList] - CSS classes for select-multi-selected-list div HTML tag
 * @property {string[]} [additionalClasses.selectedItem] - CSS classes for select-multi-selected-item div HTML tag
 * @property {string[]} [additionalClasses.optionList] - CSS classes for select-multi-options-list ul HTML tag
 * @property {string[]} [additionalClasses.optionItem] - CSS classes for select-multi-options-item li HTML tag
 * @example
 * <Select
 *  label='Countries'
 *  selected={[
 *    {
 *      id: 0,
 *      label: 'Canada',
 *      value: 'CA'
 *    },
 *    {
 *      id: 2,
 *      label: 'Italy',
 *      value: 'IT'
 *    }
 *  ]}
 *  placeholder='Select a few countries'
 *  options={[
 *    {
 *      id: 0,
 *      label: 'Canada',
 *      value: 'CA'
 *    },
 *    {
 *      id: 1,
 *      label: 'Brazil',
 *      value: 'BR'
 *    },
 *    {
 *      id: 2,
 *      label: 'Italy',
 *      value: 'IT'
 *    }
 *  ]}
 *  addOption={(option) => window.alert(`${option} was added`)}
 *  removeOption={(option) => window.alert(`${option} was removed`)}
 *  disabled={true}
 *  size='large'
 *  additionalClasses={{
 *    wrapper: ['outline-3px'],
 *    label: ['large-font-size'],
 *    input: [],
 *    placeholder: ['half-width'],
 *    selectedList: ['beige-background'],
 *    selectedItem: ['blue-border'],
 *    optionList: ['beige-background'],
 *    optionItem: ['blue-border']
 *  }}
 * />
 * 
 * @returns {JSX.Element} SelectMulti
 */

export const SelectMulti = ({
  options,
  addOption,
  removeOption,
  label,
  selected,
  disabled = false,
  size,
  placeholder,
  additionalClasses
}: SelectMultiPropTypes): JSX.Element => {
  const hook = useSelectMulti({
    selectedList: selected || [],
    disabled
  })

  const styles = new SelectMultiStyles({
    additionalClasses,
    disabled,
    size,
    isOpen: hook.hookIsOptionListVisible
  })
  const {
    wrapperClass,
    labelClass,
    inputClass,
    placeholderClass,
    selectedItemClass,
    selectedListClass,
    optionItemClass,
    optionListClass
  } = styles.buildStyleRules()

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
        onClick={(event) => hook.hookSetIsOptionListVisible(event)}
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