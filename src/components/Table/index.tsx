import React from "react";
import { TablePropTypes } from "./types";
import * as Styled from './styles'

export const Table = ({
  headers,
  data,
  loading
}: TablePropTypes) => (
  <Styled.TableStyled>
    <Styled.HeadStyled>
      <Styled.RowStyled>
        {headers.map(header => (
          <Styled.HeaderStyled
            key={header.id}
          >
            {header.label}
          </Styled.HeaderStyled>
        ))}
      </Styled.RowStyled>
    </Styled.HeadStyled>

    <tbody>
      {data.map((data, index) => (
        <Styled.RowStyled
          key={index}
        >
          {headers.map(header => (
            <Styled.DataStyled>
              {data[header.id]}
            </Styled.DataStyled>
          ))}

          {/* <FontAwesomeIcon icon={faPlus}/> */}
        </Styled.RowStyled>
      ))}
    </tbody>
  </Styled.TableStyled>
)