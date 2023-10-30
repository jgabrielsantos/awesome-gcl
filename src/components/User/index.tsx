import React from "react";
import { UserPropTypes } from "./types";
import { UserStyles } from "./styles";

/**
 * User component
 * @param {UserPropTypes} props
 * @property {string} [props.profileImage] - Url used as src for img HTML tag
 * @property {string} props.firstName - Determines initials value in case no image is provided
 * @property {string} props.lastName - Determines initials value in case no image is provided
 * @property {string} [props.description] - Determines the value for description an if it should be rendered
 * @property {GSizeEnum} props.size
 * @property {UserAdditionalClasses} [props.additionalClasses] - Option css classes
 * @property {string[]} [props.additionalClasses.wrapper] - CSS classes for wrapper div HTML tag
 * @property {string[]} [props.additionalClasses.avatar] - CSS classes for img HTML tag
 * @property {string[]} [props.additionalClasses.initials] - CSS classes for initials div HTML tag
 * @property {string[]} [props.additionalClasses.info] - CSS classe for indo div HTML tag
 * @property {string[]} [props.additionalClasses.name] = CSS classes for name p HTML tag
 * @property {string[]} [props.additionalClasses.description] - CSS classes for description p HTML tag
 * @example
 * <User
 *  size='large'
 *  profileImage:'path/to/image'
 *  firstName: 'John'
 *  lastName: 'Doe'
 *  description: 'johndoe@email.com'
 * />
 * 
 * @returns {JSX.Element} User
 */

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