import React from 'react'
import * as Styled from './styles'
import { SelectPropTypes } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useSelect } from './hooks'
import { InputWrapper } from './Components'

export const Select = ({
  label,
  selected,
  placeholder,
  options,
  onChange,
  icon,
  disabled = false,
  className
}: Readonly<SelectPropTypes>) => {
  const hook = useSelect()

  return (
    <Styled.WrapperStyled
      className={className}
      data-testid='select-wrapper'
    >
      {label && (
        <Styled.LabelStyled
        data-testid='select-label'
        >
          {label}
        </Styled.LabelStyled>
      )}
      <InputWrapper
        onClick={hook.hookSetIsOptionListVisible}
        disabled={disabled}
      >
        <Styled.InputStyled
          type='text'
          value={selected?.label || ''}
          placeholder={placeholder}
          data-testid='select-input'
          readOnly
        />
        {icon ? (
          <i
            className={icon}
            data-testid='select-custom-icon'
            />
        ) : (
          <FontAwesomeIcon
            icon={hook.hookIsOptionListVisible ? faChevronUp : faChevronDown}
            data-testid='select-default-icon'
          />
        )}
      </InputWrapper>
      <Styled.OptionListStyled
        isOpen={hook.hookIsOptionListVisible}
        data-testid='select-option-list'
      >
        {options.map(option => (
          <Styled.OptionItemStyled
            key={option.value}
            value={option.value}
            onClick={() => {
              onChange(option);
              hook.hookSetIsOptionListVisible()
            }}
            data-testid={`select-option-item-${option.value}`}
          >
            {option.label}
          </Styled.OptionItemStyled>
        ))}
      </Styled.OptionListStyled>
    </Styled.WrapperStyled>
  )
}