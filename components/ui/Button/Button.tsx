import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

import classes from './Button.module.scss';
import classNames from 'classnames/bind';

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: 'default' | 'primary' | 'pagination';
  className?: string;
  width?: 'default' | 'full';
  size?: 's' | 'm';
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

type Props = ButtonProps;

const cx = classNames.bind(classes);

const Button: FunctionComponent<Props> = ({
  children,
  className = '',
  type = 'default',
  width = 'default',
  size = 's',
  leftIcon,
  rightIcon,
}): JSX.Element => {
  const buttonClasses = cx({
    button: true,
    primary: type === 'primary',
    default: type === 'default',
    pagination: type === 'pagination',
    widthFull: width === 'full',
    small: size === 's',
    medium: size === 'm',
    [className]: className,
  });

  const leftIconClasses = cx({
    icon: true,
    iconLeft: true,
  });

  const rightIconClasses = cx({
    icon: true,
    iconRight: true,
  });

  return (
    <button type={'button'} className={buttonClasses}>
      {leftIcon && <div className={leftIconClasses}>{leftIcon}</div>}
      {children}
      {rightIcon && <div className={rightIconClasses}>{rightIcon}</div>}
    </button>
  );
};

export default Button;
