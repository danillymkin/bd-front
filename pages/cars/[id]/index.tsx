import React, { FunctionComponent } from 'react';
import DefaultErrorPage from 'next/error';

import CarScreen from '../../../components/screens/CarScreen/CarScreen';
import { GetServerSideProps } from 'next';
import { wrapper } from '../../../store';
import { fetchCarById } from '../../../store/cars/carsSlice';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Car: FunctionComponent = (): JSX.Element => {
  const { cars, error } = useTypedSelector((state) => state.cars);
  const [car] = cars;

  if (error) {
    return (
      <DefaultErrorPage statusCode={error.statusCode} title={error.error} />
    );
  }

  return <CarScreen car={car} />;
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const id = context.query?.id as string;
    await store.dispatch(fetchCarById(id));
    return { props: {} };
  });

export default Car;
