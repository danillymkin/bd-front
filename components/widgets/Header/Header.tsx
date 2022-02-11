import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import classes from './Header.module.scss';
import { LOGIN_ROUTE } from '../../../constants/routes';

interface HeaderProps {
  pageTitle: string;
}

type Props = HeaderProps;

const Header: FunctionComponent<Props> = ({ pageTitle }): JSX.Element => {
  return (
    <header className={classes.header}>
      <h1 className={classes.pageTitle}>{pageTitle}</h1>

      <div>
        <Link href={LOGIN_ROUTE}>
          <a className={classes.login}>Войти</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
