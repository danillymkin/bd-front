import React, { FunctionComponent } from 'react';

import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import { Car } from '../../../services/car/models/car';
import classes from './CarScreen.module.scss';
import CarPhotos from '../../widgets/CarPhotos/CarPhotos';
import CarDetails from '../../widgets/CarDetails/CarDetails';

interface CarScreenProps {
  car: Car;
}

type Props = CarScreenProps;

const CarScreen: FunctionComponent<Props> = ({ car }): JSX.Element => {
  return (
    <DashboardLayout pageTitle={car.name}>
      <div className={classes.content}>
        <CarPhotos photos={car.images} />

        <CarDetails car={car} />
      </div>
    </DashboardLayout>
  );
};

export default CarScreen;
