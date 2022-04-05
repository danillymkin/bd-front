import React, { ChangeEvent, FunctionComponent, useState } from 'react';

import classes from './FilterPrice.module.scss';
import Input from '../../Input/Input';

const FilterPrice: FunctionComponent = (): JSX.Element => {
  const [priceFrom, setPriceFrom] = useState<string>('');
  const [priceTo, setPriceTo] = useState<string>('');

  const onChangePriceFrom = (event: ChangeEvent<HTMLInputElement>): void => {
    setPriceFrom(event.target.value);
  };

  const onChangePriceTo = (event: ChangeEvent<HTMLInputElement>): void => {
    setPriceTo(event.target.value);
  };

  return (
    <div className={classes.filter}>
      <Input
        value={priceFrom}
        type={'number'}
        onChange={onChangePriceFrom}
        min={0}
        placeholder="Цена, от"
      />

      <Input
        value={priceTo}
        type={'number'}
        onChange={onChangePriceTo}
        min={0}
        placeholder="Цена, до"
      />
    </div>
  );
};

export default FilterPrice;
