import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import classes from './Input.module.scss';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'm' | 'xl';
  width?: 'default' | 'full';
}

type Props = InputProps;

const cx = classNames.bind(classes);

const Input: FunctionComponent<Props> = ({
  className = '',
  width = 'default',
  size = 'm',
  label = '',
  ...props
}): JSX.Element => {
  const inputClasses = cx({
    input: true,
    widthFull: width === 'full',
    withLabel: label?.length > 0,
    medium: size === 'm',
    extraLarge: size === 'xl',
    [className]: className,
  });

  return (
    <div className={classes.wrap}>
      {label && <label className={classes.label}>{label}</label>}
      <input className={inputClasses} {...props} />
    </div>
  );
};

export default Input;
