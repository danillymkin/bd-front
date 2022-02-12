import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import classes from './CarManufacturer.module.scss';

// TODO: Убрать StaticImageData

interface CarManufacturerProps {
  logo: StaticImageData | string;
  name: string;
}

type Props = CarManufacturerProps;

const CarManufacturer: FunctionComponent<Props> = ({
  logo,
  name,
}): JSX.Element => {
  return (
    <div className={classes.manufacturer}>
      <div className={classes.logo}>
        <Image src={logo} alt="logo" layout="fixed" width={24} height={24} />
      </div>

      <div className={classes.info}>
        <span className={classes.name}>{name}</span>
      </div>
    </div>
  );
};

export default CarManufacturer;
