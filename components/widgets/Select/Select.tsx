import React, { FunctionComponent, useRef, useState } from 'react';
import { useOnClickOutside, useUpdateEffect } from 'usehooks-ts';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

import classes from './Select.module.scss';

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  title: string;
}

type Props = SelectProps;

const Select: FunctionComponent<Props> = ({
  value,
  title,
  onChange,
  children,
}): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string>(value);
  const [selectTitle, setSelectTitle] = useState<string>(title);

  const ref = useRef<HTMLDivElement>(null);

  const onChangeOpen = () => {
    setOpen(!open);
  };

  const onClickOutside = () => {
    setOpen(false);
  };

  useOnClickOutside(ref, onClickOutside);

  useUpdateEffect(() => {
    onChange(selectValue);
  }, [selectValue]);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        setOpen,
        setSelectValue,
        setSelectTitle,
        selectValue,
      });
    }
    return child;
  });

  return (
    <div ref={ref} className={classes.select}>
      <div>
        <button onClick={onChangeOpen} className={classes.button}>
          {selectValue ? selectTitle : title}

          {open ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {open && (
        <div className={classes.content}>
          <div className={classes.item}>{childrenWithProps}</div>
        </div>
      )}
    </div>
  );
};

export default Select;
