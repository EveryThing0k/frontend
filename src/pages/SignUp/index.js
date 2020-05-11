import React from 'react';

import { MdLockOutline, MdFace, MdSupervisorAccount } from 'react-icons/md';
import { Container, Form, Input, Button } from './styles';
import signUp from '../../assets/signup.png';

export default function SignUp() {
  return (
    <Container>
      <Form>
        <h1>Seja um de nós</h1>
        <Input icon={<MdFace size={20} />} placeholder="Nome" />
        <Input placeholder="Email" />
        <Input icon={<MdLockOutline size={20} />} placeholder="Senha" />
        <Input
          icon={<MdSupervisorAccount size={20} />}
          placeholder="CPF/CNPJ"
        />
        <Button>REGISTRAR</Button>
      </Form>
      <img src={signUp} alt="Evok" />
    </Container>
  );
}
