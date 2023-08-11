/// <reference types="react" />
import React$1 from 'react';

type ButtonTypeEnum = 'button' | 'submit' | 'reset';
type ButtonThemeEnum = 'primary' | 'secondary' | 'tertiary' | 'destructive-primary' | 'destructive-secondary' | 'success-primary' | 'success-secondary' | 'contrast-primary' | 'contrast-secondary';
type ButtonSizeEnum = 'large' | 'medium' | 'small';
type ButtonComponentPropTypes = {
    children: React.ReactNode;
    type?: ButtonTypeEnum;
    size?: ButtonSizeEnum;
    customTheme?: ButtonThemeEnum;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
};

declare const Button: ({ children, type, size, customTheme, handleClick, disabled, className }: Readonly<ButtonComponentPropTypes>) => React$1.JSX.Element;

export { Button };
