import React, { FunctionComponent } from 'react';

import classes from './Button.module.scss';
import classNames from 'classnames/bind';

interface ButtonProps {
  type?: 'default' | 'primary' | 'pagination';
  className?: string;
}

type Props = ButtonProps;

const cx = classNames.bind(classes);

const Button: FunctionComponent<Props> = ({
  children,
  className = '',
  type = 'default',
}): JSX.Element => {
  const buttonClasses = cx({
    button: true,
    primary: type === 'primary',
    default: type === 'default',
    pagination: type === 'pagination',
    [className]: className,
  });

  return <button className={buttonClasses}>{children}</button>;
};

export default Button;
