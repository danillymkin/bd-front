import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import classes from './SidebarHeader.module.scss';
import logo from '../../../../public/logo.svg';

const SidebarHeader: FunctionComponent = (): JSX.Element => {
  return (
    <header className={classes.header}>
      <Image src={logo} alt="Логотип" />
      <span className={classes.name}>Car Dealer</span>
    </header>
  );
};

export default SidebarHeader;
