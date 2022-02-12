import React, { FunctionComponent } from 'react';

import car from '../../../public/car.jpg';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import CarsList from '../../widgets/CarsList/CarsList';
import { Car } from '../../../services/car/models/car';

const cars: Car[] = [
  {
    id: 1,
    name: 'Subaru Forester Premium Plus',
    image: car,
    price: 6_700_000,
    releaseYear: 2018,
    description: 'Описание автомобиля',
    body: 'Седан',
    color: 'Белый',
    drive: 'Задний',
    fuel: 'Бензин',
    mileage: 12000,
    power: 249,
    tax: 18000,
    transmission: 'Автоматическая',
    volume: 2.0,
    manufacturer: {
      id: 1,
      name: 'Subaru',
      address: 'Москва, Ленинградское шоссе, 39а ст1',
      director: 'Иванов В. В.',
      accountant: 'Иванов В. В.',
      account: '40817810099910004312',
      bic: '044525974',
    },
  },
  {
    id: 2,
    name: 'Subaru Forester Premium Plus',
    image: car,
    price: 6_700_000,
    releaseYear: 2018,
    description: 'Описание автомобиля',
    body: 'Седан',
    color: 'Белый',
    drive: 'Задний',
    fuel: 'Бензин',
    mileage: 12000,
    power: 249,
    tax: 18000,
    transmission: 'Автоматическая',
    volume: 2.0,
    manufacturer: {
      id: 1,
      name: 'Subaru',
      address: 'Москва, Ленинградское шоссе, 39а ст1',
      director: 'Иванов В. В.',
      accountant: 'Иванов В. В.',
      account: '40817810099910004312',
      bic: '044525974',
    },
  },
];

const CarsScreen: FunctionComponent = (): JSX.Element => {
  return (
    <DashboardLayout pageTitle="Автомобили">
      <CarsList cars={cars} />
    </DashboardLayout>
  );
};

export default CarsScreen;
