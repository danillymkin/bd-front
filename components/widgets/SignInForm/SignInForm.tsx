import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useState,
} from 'react';

import classes from './SignInForm.module.scss';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

const SignInForm: FunctionComponent = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
      />

      <Input
        value={password}
        type={'password'}
        onChange={onChangePassword}
        size={'xl'}
        width={'full'}
        placeholder={'Ваш пароль'}
        label={'Пароль'}
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
