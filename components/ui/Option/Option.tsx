import React, { FunctionComponent } from 'react';

import classes from './Option.module.scss';

interface OptionProps {
  value: string;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectValue?: React.Dispatch<React.SetStateAction<string>>;
  setSelectTitle?: React.Dispatch<React.SetStateAction<string>>;
}

type Props = OptionProps;

const Option: FunctionComponent<Props> = ({
  value,
  setOpen,
  setSelectValue,
  setSelectTitle,
  children,
}): JSX.Element => {
  const onClick = () => {
    if (setSelectValue && setOpen && setSelectTitle) {
      setSelectValue(value);
      setOpen(false);
      setSelectTitle(children?.toString() || '');
    }
  };

  return (
    <span onClick={onClick} className={classes.item}>
      {children}
    </span>
  );
};

export default Option;
