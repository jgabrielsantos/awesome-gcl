import styled from "styled-components";
import { toRem } from "../../utils";
import { colors } from "../../styles";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const AvatarStyled = styled.img`
  padding: ${toRem(8)};
  width: 80px;
  height: auto;
  border-radius: 100%;
`

export const InitialsStyled = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  color: ${colors.white[100]};
  background-color: ${colors.grayscale[40]};
`

export const UserInfoStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${toRem(6)};
`

export const UserNameStyled = styled.p`
  font-size: ${toRem(16)};
`

export const UserDescriptionStyled = styled.p`
  font-size: ${toRem(12)};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`