import React, { FunctionComponent } from 'react';

import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';

const CarsScreen: FunctionComponent = (): JSX.Element => {
  return (
    <DashboardLayout pageTitle="Автомобили">
      <div>Content</div>
    </DashboardLayout>
  );
};

export default CarsScreen;
