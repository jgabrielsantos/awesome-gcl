import styled from "styled-components";
import { toRem } from "../../utils";
import { colors } from "../../styles";
import { SelectMultiComponentsEnum, StyledPropTypes } from "./types";
import { GSizeEnum } from "../types";
import Sizes from './sizes'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${toRem(6)};
  position: relative;
`

export const LabelStyled = styled.label`
  font-size: 1rem;
  width: 100%;
  color: ${colors.grayscale[100]};
`

export const ListWrapper = styled.div<Pick<StyledPropTypes, 'disabled'>>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${toRem(10)};
  padding: ${toRem(12)} ${toRem(16)};
  border: 1px solid ${colors.grayscale[40]};
  border-radius: ${toRem(6)};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer' };
  background-color: ${({ disabled }) => disabled ? colors.grayscale[0] : colors.white[100]};
`

export const PlaceholderStyled = styled.p`
  font-size: 1rem;
  color: ${colors.grayscale[60]};
  white-space: nowrap;
  width: 100%;
`

export const SelectedListStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: ${toRem(6)};
`

export const SelectedStyled = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${toRem(6)};
  padding: ${toRem(8)} ${toRem(12)};
  border-radius: ${toRem(6)};
  background-color: ${colors.grayscale[0]};

  &:hover {
    background-color: ${colors.support.alert[5]};
  }
`

export const OptionListStyled = styled.ul.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop)
})<Pick<StyledPropTypes, 'isOpen'>>`
  width: 100%;
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${toRem(8)};
  border: 1px solid ${colors.grayscale[40]};
  border-radius: ${toRem(8)};
  padding: ${toRem(12)} ${toRem(16)};
  position: absolute;
  right: 0;
  top: 110%;
  background-color: ${colors.white[100]};
`

export const OptionItemStyled = styled.li`
  cursor: pointer;
  width: 100%;
  color: ${colors.grayscale[100]};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

interface SelectStyle {
  buildStyleRules: () => Record<string, string>
}

export class SelectStyles implements SelectStyle {
  private additionalClasses
  private sizes: Record<GSizeEnum, Record<SelectMultiComponentsEnum, Map<string, string>>> = {
    large: Sizes.large(),
    medium: Sizes.medium(),
    small: Sizes.small()
  }

  constructor(additionalClasses: Record<string, string>) {
    this.additionalClasses = additionalClasses
  }

  private getSizeRules(size: GSizeEnum, component: SelectMultiComponentsEnum) {
    return this.sizes[size][component]
  }

  buildStyleRules() {
    const classes = {
      wrapperClass: [].join(' '),
      labelClass: [].join(' '),
      inputClass: [].join(' '),
      placeholderClass: [].join(' '),
      selectedItemClass: [].join(' '),
      selectedListClass: [].join(' '),
      optionItemClass: [].join(' '),
      optionListClass: [].join(' '),
    }

    return classes
  }
}