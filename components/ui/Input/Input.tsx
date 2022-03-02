import React, {
  ChangeEvent,
  FunctionComponent,
  HTMLInputTypeAttribute,
  useState,
} from 'react';
import { useUpdateEffect } from 'usehooks-ts';

import classes from './Input.module.scss';
import classNames from 'classnames/bind';

interface InputProps {
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (value: string) => void;
  min?: number;
  max?: number;
  placeholder?: string;
  className?: string;
}

type Props = InputProps;

const cx = classNames.bind(classes);

const Input: FunctionComponent<Props> = ({
  type,
  value,
  onChange,
  min,
  max,
  placeholder,
  className = '',
}): JSX.Element => {
  const [inputValue, setInputValue] = useState(value);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useUpdateEffect(() => {
    onChange(inputValue);
  }, [inputValue]);

  const inputClasses = cx({
    input: true,
    [className]: className,
  });

  return (
    <input
      type={type}
      value={inputValue}
      min={min}
      max={max}
      placeholder={placeholder}
      onChange={onInputChange}
      className={inputClasses}
    />
  );
};

export default Input;
