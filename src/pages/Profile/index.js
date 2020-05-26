import React from 'react';
import { MdLockOutline, MdFace } from 'react-icons/md';

import profileImg from '../../assets/profile.svg';
import profileDataImg from '../../assets/profile_data.svg';

import { Container, Header, Content, Form, Input, Button } from './styles';

export default function Profile() {
  return (
    <Container>
      <Header>
        <img src={profileImg} alt="Evok" />
        <div>
          <h3>Henrique Olivo Antonio</h3>
          <h4>Nível 09</h4>
        </div>
      </Header>
      <Content>
        <Form>
          <h1>Alterar informações de perfil</h1>
          <div>
            <h4>Nome</h4>
            <Input icon={<MdFace size={20} />} placeholder="Nome" />
            <h4>E-mail</h4>
            <Input placeholder="Email" />
          </div>
          <div>
            <h4>Senha</h4>
            <Input icon={<MdLockOutline size={20} />} placeholder="Senha" />
            <h4>Repetir senha</h4>
            <Input
              icon={<MdLockOutline size={20} />}
              placeholder="Repetir senha"
            />
          </div>
          <Button>Salvar</Button>
        </Form>
        <img src={profileDataImg} alt="Evok" />
      </Content>
    </Container>
  );
}
