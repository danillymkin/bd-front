import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useState,
} from 'react';

import classes from './SignInForm.module.scss';
import NewInput from '../../ui/NewInput/NewInput';
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
      <NewInput
        value={email}
        onChange={onChangeEmail}
        size={'xl'}
        width={'full'}
        placeholder={'Ваш E-Mail'}
        label={'E-Mail'}
      />

      <NewInput
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
