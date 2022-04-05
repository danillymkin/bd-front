import React, { ChangeEvent, FunctionComponent, useState } from 'react';

import classes from '../FilterPower/FilterPower.module.scss';
import Input from '../../Input/Input';

const FilterMileage: FunctionComponent = (): JSX.Element => {
  const [mileageFrom, setMileageFrom] = useState<string>('');
  const [mileageTo, setMileageTo] = useState<string>('');

  const onChangeMileageFrom = (event: ChangeEvent<HTMLInputElement>): void => {
    setMileageFrom(event.target.value);
  };

  const onChangeMileageTo = (event: ChangeEvent<HTMLInputElement>): void => {
    setMileageTo(event.target.value);
  };

  return (
    <div className={classes.filter}>
      <Input
        value={mileageFrom}
        type={'number'}
        onChange={onChangeMileageFrom}
        min={0}
        placeholder="Пробег, от"
      />

      <Input
        value={mileageTo}
        type={'number'}
        onChange={onChangeMileageTo}
        min={0}
        placeholder="Пробег, до"
      />
    </div>
  );
};

export default FilterMileage;
