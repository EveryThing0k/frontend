import React from 'react';

import {
  MdTrendingUp,
  MdAccountCircle,
  MdSettings,
  MdExitToApp,
} from 'react-icons/md';
import { Container, Header, Content } from './styles';
import profileImg from '../../assets/profile.svg';

export default function Popover({ name, email, handleLogout }) {
  return (
    <Container>
      <Header>
        <div>
          <h4>{name || ''}</h4>
          <h5>{email || ''}</h5>
        </div>
        <img src={profileImg} alt="Evok" />
      </Header>
      <Content>
        <button type="button">
          <MdAccountCircle size={23} color="#444444" />
          <strong>Meu Perfil</strong>
        </button>
        <button type="button">
          <MdTrendingUp size={23} color="#444444" />
          <strong>Nível</strong>
        </button>
        <button type="button">
          <MdSettings size={23} color="#444444" />
          <strong>Configurações</strong>
        </button>
        <button type="button" onClick={handleLogout}>
          <MdExitToApp size={23} color="#ff0000" />
          <strong>Sair</strong>
        </button>
      </Content>
    </Container>
  );
}
