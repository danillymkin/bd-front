import React, { FunctionComponent } from 'react';

import classes from './CarsScreen.module.scss';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import CarsList from '../../widgets/CarsList/CarsList';
import Pagination from '../../widgets/Pagination/Pagination';
import { Car } from '../../../services/car/models/car';
import Filter from '../../widgets/Filter/Filter';

interface CarsScreenProps {
  cars: Car[];
  totalCars: number;
}

type Props = CarsScreenProps;

const CarsScreen: FunctionComponent<Props> = ({
  cars,
  totalCars,
}): JSX.Element => {
  return (
    <DashboardLayout pageTitle="Автомобили">
      <div className={classes.layout}>
        <div className={classes.content}>
          <CarsList cars={cars} />

          <Pagination
            total={totalCars}
            pageSize={10}
            currentPage={4}
            className="mt-14"
          />
        </div>

        <Filter />
      </div>
    </DashboardLayout>
  );
};

export default CarsScreen;
