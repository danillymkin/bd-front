import React from 'react';
import CarsScreen from '../../components/screens/CarsScreen/CarsScreen';
import { GetServerSideProps, NextPage } from 'next';
import { wrapper } from '../../store';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchAllCars } from '../../store/cars/carsSlice';

const Cars: NextPage = (): JSX.Element => {
  const { cars, totalCars } = useTypedSelector((state) => state.cars);

  return <CarsScreen cars={cars} totalCars={totalCars} />;
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    await store.dispatch(fetchAllCars());
    return { props: {} };
  });

export default Cars;
