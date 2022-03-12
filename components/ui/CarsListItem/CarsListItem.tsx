import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import classes from './CarsListItem.module.scss';
import CarManufacturer from '../CarManufacturer/CarManufacturer';
import CarSpecificationsLine from '../CarSpecificationsLine/CarSpecificationsLine';
import CarPrice from '../CarPrice/CarPrice';
import NoImage from '../NoImage/NoImage';
import { Car } from '../../../services/car/models/car';
import { mileageFormatter } from '../../../helpers/mileageFormatter';
import { CARS_ROUTE, MANUFACTURERS_ROUTE } from '../../../constants/routes';
import { STATIC_URL } from '../../../http';

interface CarsListItemProps {
  car: Car;
}

type Props = CarsListItemProps;

const CarsListItem: FunctionComponent<Props> = ({ car }): JSX.Element => {
  const {
    id,
    name,
    price,
    color,
    drive,
    mileage,
    transmission,
    manufacturer,
    images,
  } = car;
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
          {images && images[0] ? (
            <Image
              src={`${STATIC_URL}/${images[0].fileName}`}
              objectFit={'cover'}
              layout="fill"
              alt="car"
            />
          ) : (
            <NoImage />
          )}
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
            <CarManufacturer
              logo={`${STATIC_URL}/${manufacturer.logo}`}
              name={manufacturer.name}
            />
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
