import React from 'react';

import {
  MdTitle,
  MdLocationOn,
  MdDomain,
  MdLocationCity,
  MdMap,
  MdNaturePeople,
  MdMyLocation,
} from 'react-icons/md';
import { Container, Form, Input, Button } from './styles';
import signup_company from '../../assets/signup_company.png';

function SignUpCompany() {
  return (
    <Container>
      <Form>
        <h1>Registar Empresa</h1>
        <Input icon={<MdTitle size={20} />} placeholder="Nome Fantasia" />
        <Input icon={<MdMap size={20} />} placeholder="CEP" />
        <Input icon={<MdNaturePeople size={20} />} placeholder="Rua" />
        <Input icon={<MdLocationCity size={20} />} placeholder="Bairro" />
        <Input icon={<MdDomain size={20} />} placeholder="Cidade" />
        <div>
          <Input icon={<MdLocationOn />} placeholder="UF" />
          <Input icon={<MdMyLocation size={20} />} placeholder="Número" />
        </div>
        <Button>REGISTRAR</Button>
      </Form>
      <img src={signup_company} alt="evok" />
    </Container>
  );
}

export default SignUpCompany;
