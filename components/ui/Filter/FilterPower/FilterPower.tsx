import React, { ChangeEvent, FunctionComponent, useState } from 'react';

import classes from './FilterPower.module.scss';
import Input from '../../Input/Input';

const FilterPower: FunctionComponent = (): JSX.Element => {
  const [powerFrom, setPowerFrom] = useState<string>('');
  const [powerTo, setPowerTo] = useState<string>('');

  const onChangePowerFrom = (event: ChangeEvent<HTMLInputElement>): void => {
    setPowerFrom(event.target.value);
  };

  const onChangePowerTo = (event: ChangeEvent<HTMLInputElement>): void => {
    setPowerTo(event.target.value);
  };

  return (
    <div className={classes.filter}>
      <Input
        value={powerFrom}
        type={'number'}
        onChange={onChangePowerFrom}
        min={0}
        placeholder="Мощность, от"
      />

      <Input
        value={powerTo}
        type={'number'}
        onChange={onChangePowerTo}
        min={0}
        placeholder="Мощность, до"
      />
    </div>
  );
};

export default FilterPower;
