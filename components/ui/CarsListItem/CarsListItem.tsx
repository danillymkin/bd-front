import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import classes from './CarsListItem.module.scss';
import logo from '../../../public/subaru.png';
import carImg from '../../../public/car.jpg';
import CarManufacturer from '../CarManufacturer/CarManufacturer';
import CarSpecificationsLine from '../CarSpecificationsLine/CarSpecificationsLine';
import CarPrice from '../CarPrice/CarPrice';
import { Car } from '../../../services/car/models/car';
import { mileageFormatter } from '../../../helpers/mileageFormatter';
import { CARS_ROUTE, MANUFACTURERS_ROUTE } from '../../../constants/routes';

interface CarsListItemProps {
  car: Car;
}

type Props = CarsListItemProps;

const CarsListItem: FunctionComponent<Props> = ({ car }): JSX.Element => {
  const { id, name, price, color, drive, mileage, transmission, manufacturer } =
    car;
  const specifications: string[] = [
    `${mileageFormatter.format(mileage)} км`,
    color,
    drive,
    transmission,
  ];

  return (
    <div className={classes.car}>
      <Link href={`${CARS_ROUTE}/${id}`}>
        <a className={classes.image}>
          <Image src={carImg} layout="responsive" alt="car" />
        </a>
      </Link>

      <div className={classes.details}>
        <Link href={`${CARS_ROUTE}/${id}`}>
          <a className={classes.name}>{name}</a>
        </Link>

        <div className={classes.specifications}>
          <CarSpecificationsLine specifications={specifications} />
        </div>

        <Link href={`${MANUFACTURERS_ROUTE}/${manufacturer.id}`}>
          <a className={classes.manufacturer}>
            <CarManufacturer logo={logo} name={manufacturer.name} />
          </a>
        </Link>

        <div className={classes.price}>
          <CarPrice price={price} />
        </div>
      </div>
    </div>
  );
};

export default CarsListItem;
