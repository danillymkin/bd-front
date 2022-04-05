import React, { FunctionComponent } from 'react';

import classes from './AuthLayout.module.scss';

const AuthLayout: FunctionComponent = ({ children }): JSX.Element => {
  return <div className={classes.layout}>{children}</div>;
};

export default AuthLayout;
