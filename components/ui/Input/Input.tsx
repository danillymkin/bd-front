import React, {
  ChangeEvent,
  FunctionComponent,
  HTMLInputTypeAttribute,
  useState,
} from 'react';
import { useUpdateEffect } from 'usehooks-ts';

import classes from './Input.module.scss';

interface InputProps {
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (value: string) => void;
  min?: number;
  max?: number;
  placeholder?: string;
}

type Props = InputProps;

const Input: FunctionComponent<Props> = ({
  type,
  value,
  onChange,
  min,
  max,
  placeholder,
}): JSX.Element => {
  const [inputValue, setInputValue] = useState(value);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useUpdateEffect(() => {
    onChange(inputValue);
  }, [inputValue]);

  return (
    <input
      type={type}
      value={inputValue}
      min={min}
      max={max}
      placeholder={placeholder}
      onChange={onInputChange}
      className={classes.input}
    />
  );
};

export default Input;
