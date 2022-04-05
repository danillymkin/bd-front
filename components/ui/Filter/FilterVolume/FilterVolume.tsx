import React, { ChangeEvent, FunctionComponent, useState } from 'react';

import classes from './FilterVolume.module.scss';
import Input from '../../Input/Input';

const FilterVolume: FunctionComponent = (): JSX.Element => {
  const [volumeFrom, setVolumeFrom] = useState<string>('');
  const [volumeTo, setVolumeTo] = useState<string>('');

  const onChangeVolumeFrom = (event: ChangeEvent<HTMLInputElement>): void => {
    setVolumeFrom(event.target.value);
  };

  const onChangeVolumeTo = (event: ChangeEvent<HTMLInputElement>): void => {
    setVolumeTo(event.target.value);
  };

  return (
    <div className={classes.filter}>
      <Input
        value={volumeFrom}
        type={'number'}
        onChange={onChangeVolumeFrom}
        min={0}
        placeholder="Объем, от"
      />

      <Input
        value={volumeTo}
        type={'number'}
        onChange={onChangeVolumeTo}
        min={0}
        placeholder="Объем, до"
      />
    </div>
  );
};

export default FilterVolume;
