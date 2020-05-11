import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import signin from '../../assets/signin.svg';

import { signInRequest } from '../../store/modules/auth/actions';
import { Container, Form, Input, Button } from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <img src={signin} alt="signin" />
      <Form>
        <h1>EVERYTHING OK</h1>
        <Input
          value={email}
          placeholder="Digite seu e-mail..."
          onChangeValue={setEmail}
        />
        <Input
          value={password}
          placeholder="Digite sua senha..."
          onChangeValue={setPassword}
          type="password"
        />
        <Button loading={loading} onClick={handleSubmit}>
          {' '}
          Login{' '}
        </Button>
        <p>
          Não possui uma conta? <Link to="/signup">Criar Conta</Link>
        </p>
      </Form>
    </Container>
  );
}
