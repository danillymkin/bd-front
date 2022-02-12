import React, { FunctionComponent } from 'react';

import classes from './CarsList.module.scss';
import CarsListItem from '../../ui/CarsList/CarsListItem/CarsListItem';
import { Car } from '../../../services/car/models/car';

interface CarsListProps {
  cars: Car[];
}

type Props = CarsListProps;

const CarsList: FunctionComponent<Props> = ({ cars }): JSX.Element => {
  return (
    <div className={classes.list}>
      {cars.map((car: Car) => (
        <CarsListItem key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarsList;
