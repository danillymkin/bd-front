import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import classes from './CarsListItem.module.scss';
import logo from '../../../public/subaru.png';
import carImg from '../../../public/car.jpg';
import CarManufacturer from '../CarManufacturer/CarManufacturer';
import CarSpecificationsLine from '../CarSpecificationsLine/CarSpecificationsLine';
import CarPrice from '../CarPrice/CarPrice';
import { Car } from '../../../services/car/models/car';
import { mileageFormatter } from '../../../helpers/mileageFormatter';

interface CarsListItemProps {
  car: Car;
}

type Props = CarsListItemProps;

const CarsListItem: FunctionComponent<Props> = ({ car }): JSX.Element => {
  const { name, price, color, drive, mileage, transmission, manufacturer } =
    car;
  const specifications: string[] = [
    `${mileageFormatter.format(mileage)} км`,
    color,
    drive,
    transmission,
  ];

  return (
    <div className={classes.car}>
      <div className={classes.image}>
        <Image src={carImg} layout="responsive" alt="car" />
      </div>

      <div className={classes.details}>
        <h3 className={classes.name}>{name}</h3>

        <div className={classes.specifications}>
          <CarSpecificationsLine specifications={specifications} />
        </div>

        <div className={classes.manufacturer}>
          <CarManufacturer logo={logo} name={manufacturer.name} />
        </div>

        <div className={classes.price}>
          <CarPrice price={price} />
        </div>
      </div>
    </div>
  );
};

export default CarsListItem;
