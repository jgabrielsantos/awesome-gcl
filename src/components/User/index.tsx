import React from "react";
import * as Styled from './styles'
import { UserPropTypes } from "./types";

export const User = ({
  profileImage,
  firstName,
  lastName,
  description,
  className
}: UserPropTypes) => (
  <Styled.Wrapper
    className={className}
    data-testid='user-wrapper'
  >
    {profileImage ? (
      <Styled.AvatarStyled
        src={profileImage}
        alt="user avatar"
        data-testid='user-avatar'
      />
    ) : (
      <Styled.InitialsStyled
        data-testid='user-initials'
      >
        <p>{`${firstName[0]}${lastName[0]}`}</p>
      </Styled.InitialsStyled>
    )}
    <Styled.UserInfoStyled
      data-testid='user-info'
    >
      <Styled.UserNameStyled
        data-testid='user-name'
      >
        {`${firstName} ${lastName}`}
      </Styled.UserNameStyled>
      {description && (
        <Styled.UserDescriptionStyled
          data-testid='user-description'
        >
          {description}
        </Styled.UserDescriptionStyled>
      )}
    </Styled.UserInfoStyled>
  </Styled.Wrapper>
)