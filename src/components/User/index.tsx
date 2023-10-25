import React from "react";
import { UserPropTypes } from "./types";
import { UserStyles } from "./styles";

export const User = ({
  profileImage,
  firstName,
  lastName,
  description,
  size,
  additionalClasses
}: UserPropTypes) => {
  const styles = new UserStyles({
    additionalClasses,
    size
  })
  const {
    wrapperClass,
    avatarClass,
    initialsClass,
    infoClass,
    nameClass,
    descriptionClass
  } = styles.buildStyleRules()
  return (
    <div
      className={wrapperClass}
      data-testid='user-wrapper'
    >
      {profileImage ? (
        <img
          src={profileImage}
          alt="user avatar"
          className={avatarClass}
          data-testid='user-avatar'
        />
      ) : (
        <div
          className={initialsClass}
          data-testid='user-initials'
        >
          <p>{`${firstName[0]}${lastName[0]}`}</p>
        </div>
      )}
      <div
        className={infoClass}
        data-testid='user-info'
      >
        <p
          className={nameClass}
          data-testid='user-name'
        >
          {`${firstName} ${lastName}`}
        </p>
        {description && (
          <p
            className={descriptionClass}
            data-testid='user-description'
          >
            {description}
          </p>
        )}
      </div>
    </div>
  )
}