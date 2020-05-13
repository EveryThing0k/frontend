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
import { Container, Content, Input, Button } from './styles';

import createCompanyImg from '../../assets/create_company.svg';

export default function CreateCompany() {
  return (
    <Container>
      <Content>
        <h1>VOCÊ AINDA NÃO PERTENCE A NENHUMA EMPRESA</h1>
        <h2>Crie sua empresa agora mesmo!</h2>
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
      </Content>
      <img src={createCompanyImg} alt="CreateCompany" />
    </Container>
  );
}
