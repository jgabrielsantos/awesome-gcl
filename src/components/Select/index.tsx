import React from 'react'
import * as Styled from './styles'
import { SelectPropTypes, SelectedPropTypes } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useSelect } from './hooks'

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
  const hook = useSelect({ onChange })

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
      <Styled.InputWrapperStyled
        onClick={hook.hookSetIsOptionListVisible}
        disabled={disabled}
        data-testid='select-input-wrapper'
      >
        <Styled.InputStyled
          type='text'
          value={selected?.label}
          placeholder={placeholder}
          data-testid='select-input'
        />
        {icon ? (
          <i
            className={icon}
            data-testid='select-custom-icon'
            />
        ) : (
          <FontAwesomeIcon
            icon={faChevronDown}
            data-testid='select-icon'
          />
        )}
      </Styled.InputWrapperStyled>
      <Styled.OptionListStyled
        isOpen={true}
        data-testid='select-option-list'
      >
        {options.map(option => (
          <Styled.OptionItemStyled
            key={option.value}
            value={option.value}
            onClick={hook.hookSetIsOptionListVisible}
            data-testid={`select-option-item-${option.value}`}
          >
            {option.label}
          </Styled.OptionItemStyled>
        ))}
      </Styled.OptionListStyled>
    </Styled.WrapperStyled>
  )
}