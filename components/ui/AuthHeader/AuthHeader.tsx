import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { IoClose } from 'react-icons/io5';

import classes from './AuthHeader.module.scss';

interface AuthHeaderProps {
  variant: 'signIn' | 'signUp';
}

type Props = AuthHeaderProps;

const AuthHeader: FunctionComponent<Props> = ({ variant }): JSX.Element => {
  const title = variant === 'signIn' ? 'Войти в аккаунт' : 'Зарегистрироваться';
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <header className={classes.header}>
      <span className={classes.title}>{title}</span>

      <IoClose size={25} className={classes.close} onClick={goBack} />
    </header>
  );
};

export default AuthHeader;
