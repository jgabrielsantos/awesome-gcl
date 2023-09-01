import styled from "styled-components";
import { colors } from "../../styles";

export const TableStyled = styled.table`
  width: 100%;
`

export const HeadStyled = styled.thead``

export const HeaderStyled = styled.th`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const RowStyled = styled.tr`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid ${colors.grayscale[10]};

  :last-child {
    border: none;
  }
`

export const DataStyled = styled.td`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`