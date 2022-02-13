import React, { FunctionComponent, useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';

import classes from './FilterCheck.module.scss';
import classNames from 'classnames/bind';
import { useUpdateEffect } from 'usehooks-ts';

interface FilterCheckProps {
  value: string;
  onChange: (value: string, checked: boolean) => void;
}

type Props = FilterCheckProps;

const cx = classNames.bind(classes);

const FilterCheck: FunctionComponent<Props> = ({
  value,
  onChange,
  children,
}): JSX.Element => {
  const [checked, setChecked] = useState(false);

  const onChecked = () => {
    setChecked(!checked);
  };

  useUpdateEffect(() => {
    onChange(value, checked);
  }, [checked]);

  return (
    <div onClick={onChecked} className={classes.filterCheck}>
      <CheckBox checked={checked} />

      <span className={cx({ text: true, active: checked })}>{children}</span>
    </div>
  );
};

export default FilterCheck;
