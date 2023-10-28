import React from 'react'
import { SelectPropTypes } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useSelect } from './hooks'
import { SelectStyles } from './styles'

/**
 * Select component
 * 
 * @param {SelectPropTypes} props
 * @property {string} [props.label] - Determines the value of label and if it should be rendered
 * @property {ItemPropTypes} [props.selected] - Determines the value shown in the input
 * @property {string} [props.placeholder] - Defines the input placeholder
 * @property {ItemPropTypes[]} props.options - List of options to be selected
 * @property {function} props.onChange - Function triggered when an option is clicked
 * @param {ItemPropTypes} props.onChange.option - option item clicked
 * @property {IconDefinition} [props.icon] - Font Awesome icon class
 * @property {boolean} [props.disabled] - Defines the input background color and disables the input wrapper function
 * @property {GSizeEnum} props.size - Defines label and input font size, input wrapper padding and option list gap an top position
 * @property {SelectAdditionalClassesPropTypes} [props.additionalClasses] - Object for additional css classes to each HTML tag
 * @property {string[]} [additionalClasses.wrapper] - CSS classes for select-wrapper div HTML tag
 * @property {string[]} [additionalClasses.label] - CSS classes for select-label label HTML tag
 * @property {string[]} [additionalClasses.inputWrapper] - CSS classes for select-input-wrapper div HTML tag
 * @property {string[]} [additionalClasses.input] - CSS classes for select-input input HTML tag
 * @property {string[]} [additionalClasses.optionList] - CSS classes for select-option-list ul HTML tag
 * @property {string[]} [additionalClasses.optionItem] - CSS classes for select-option-item li HTML tag
 * @example
 * <Select
 *  label='Country'
 *  selected={{
 *    id: 0,
 *    label: 'Canada',
 *    value: 'CA'
 *  }}
 *  placeholder='Select your address country'
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
 *  onChange={(option) => window.alert(`${option} was selected`)}
 *  icon={faGlobe}
 *  disabled={true}
 *  size='large'
 *  additionalClasses={{
 *    wrapper: ['outline-3px'],
 *    label: ['large-font-size'],
 *    inputWrapper: ['half-width'],
 *    input: [],
 *    optionList: ['beige-background'],
 *    optionItem: ['blue-border']
 *  }}
 * />
 * 
 * @returns {JSX.Element} Select
 */

export const Select = ({
  label,
  selected,
  placeholder,
  options,
  onChange,
  icon,
  disabled = false,
  size,
  additionalClasses
}: Readonly<SelectPropTypes>): JSX.Element => {
  const hook = useSelect()
  const styles = new SelectStyles({
    additionalClasses,
    size,
    disabled,
    isOpen: hook.hookIsOptionListVisible
  })
  const {
    wrapperClass,
    labelClass,
    inputWrapperClass,
    inputClass,
    optionListClass,
    optionItemClass
  } = styles.buildStyleRules()

  return (
    <div
      className={wrapperClass}
      data-testid='select-wrapper'
    >
      {label && (
        <label
          className={labelClass}
          data-testid='select-label'
        >
          {label}
        </label>
      )}
      <div
        className={inputWrapperClass}
        onClick={disabled ? undefined : hook.hookSetIsOptionListVisible}
        data-testid='select-input-wrapper'
      >
        <input
          type='text'
          value={selected?.label || ''}
          placeholder={placeholder}
          data-testid='select-input'
          readOnly
          className={inputClass}
        />
        {icon ? (
          <FontAwesomeIcon
            icon={icon}
            data-testid='select-custom-icon'
          />
        ) : (
          <FontAwesomeIcon
            icon={hook.hookIsOptionListVisible ? faChevronUp : faChevronDown}
            data-testid='select-default-icon'
          />
        )}
      </div>
      <ul
        className={optionListClass}
        data-testid='select-option-list'
      >
        {options.map(option => (
          <li
            key={option.value}
            value={option.value}
            onClick={() => {
              onChange(option);
              hook.hookSetIsOptionListVisible()
            }}
            className={optionItemClass}
            data-testid={`select-option-item-${option.value}`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}