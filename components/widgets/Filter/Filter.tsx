import React, { FunctionComponent, useState } from 'react';
import { FaFilter } from 'react-icons/fa';

import classes from './Filter.module.scss';
import FilterItem from '../../ui/FilterItem/FilterItem';
import { useUpdateEffect } from 'usehooks-ts';
import MultiSelectCheckboxes from '../MultiSelectCheckboxes/MultiSelectCheckboxes';

const Filter: FunctionComponent = (): JSX.Element => {
  const [brands, setBrands] = useState<string[]>([]);

  const onBrandChange = (values: string[]) => {
    setBrands(values);
  };

  useUpdateEffect(() => {
    console.log(brands);
  }, [brands]);

  return (
    <aside className={classes.filter}>
      <div className={classes.header}>
        <FaFilter />

        <span>Фильтры</span>
      </div>

      <div>
        <FilterItem name="Марка">
          <MultiSelectCheckboxes
            options={[
              { label: 'Subaru', value: '1' },
              { label: 'BMW', value: '2' },
            ]}
            values={brands}
            onChange={onBrandChange}
          />
        </FilterItem>

        <FilterItem name="Год выпуска" />

        <FilterItem name="Кузов" />

        <FilterItem name="Двигатель" />

        <FilterItem name="Коробка" />

        <FilterItem name="Привод" />

        <FilterItem name="Мощность" />

        <FilterItem name="Объем" />

        <FilterItem name="Пробег" />

        <FilterItem name="Цвет" />

        <FilterItem name="Цена" />
      </div>
    </aside>
  );
};

export default Filter;
