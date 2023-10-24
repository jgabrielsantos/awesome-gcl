import React from 'react'
import { SelectPropTypes } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useSelect } from './hooks'
import { SelectStyles } from './styles'

export const Select = ({
  label,
  selected,
  placeholder,
  options,
  onChange,
  icon,
  disabled = false,
  size,
  additionalClasses = {
    wrapper: [],
    label: [],
    inputWrapper: [],
    input: [],
    optionList: [],
    optionItem: []
  }
}: Readonly<SelectPropTypes>) => {
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