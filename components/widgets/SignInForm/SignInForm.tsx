import React, { FormEvent, FunctionComponent, useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

import classes from './SignInForm.module.scss';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

const SignInForm: FunctionComponent = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  const login = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form}>
      <Input
        value={email}
        onChange={onChangeEmail}
        size={'xl'}
        width={'full'}
        placeholder={'Ваш E-Mail'}
        label={'E-Mail'}
        icon={<FaEnvelope />}
      />

      <Input
        value={password}
        type={'password'}
        onChange={onChangePassword}
        size={'xl'}
        width={'full'}
        placeholder={'Ваш пароль'}
        label={'Пароль'}
        clearable
      />

      <Button
        onClick={login}
        className={classes.button}
        size={'m'}
        width={'full'}
        type={'primary'}
      >
        Войти
      </Button>
    </form>
  );
};

export default SignInForm;
