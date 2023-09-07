import styled from "styled-components";
import { colors } from "../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toRem } from "../../utils";
import { RowDetailStyledPropTypes, RowMainStyledPropTypes, RowStyledPropTypes } from "./types";

export const TableStyled = styled.table`
  width: 100%;
`

export const HeadStyled = styled.thead``

export const HeaderStyled = styled.th`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${toRem(6)};
`

export const RowStyled = styled.tr.withConfig({
  shouldForwardProp: (props) => !['isTableHeader'].includes(props)
})<RowStyledPropTypes>`
  width: 100%;
  display: flex;
  flex-direction: ${({ isTableHeader }) => isTableHeader ? 'row' : 'column'};
  gap: ${({ isTableHeader }) => isTableHeader ? toRem(10) : 0};
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid ${colors.grayscale[10]};

  &:last-child {
    border: none;
  }
`

export const RowMainStyled = styled.td.withConfig({
  shouldForwardProp: (props) => !['hasClickFunction'].includes(props)
})<RowMainStyledPropTypes>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${toRem(10)};
  cursor: ${({ hasClickFunction }) => hasClickFunction ? 'pointer' : 'default'};
`

export const RowDetailStyled = styled.td.withConfig({
  shouldForwardProp: (props) => !['isOpen'].includes(props)
})<RowDetailStyledPropTypes>`
  width: 100%;
  margin-top: ${({ isOpen }) => isOpen ? toRem(15) : 0};
  max-height: ${({ isOpen }) => isOpen ? '100%' : '0'};
  overflow: hidden;
  padding: ${({ isOpen }) => isOpen ? '1rem' : '0'};
  transition: all 0.1s ease-out;
  background-color: ${colors.grayscale[5]};
`

export const IconWrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: ${toRem(5)};

  &:hover {
    background-color: ${colors.grayscale[5]};
  }
`

export const IconStyled = styled(FontAwesomeIcon)`
  color: ${colors.grayscale[80]};
`

export const DataStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`