import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  MdTrendingUp,
  MdPeople,
  MdAccountCircle,
  MdExitToApp,
} from 'react-icons/md';
import { Container, Header, Content } from './styles';
import profileImg from '../../assets/profile.svg';
import Members from '../Members';

export default function Popover({ name, email, handleLogout, onClickClose }) {
  const userType = useSelector(state => state.user.profile.type);
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

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
        <Link to="/profile" onClick={onClickClose}>
          <MdAccountCircle size={23} color="#444444" />
          <strong>Meu Perfil</strong>
        </Link>
        {userType === 'employee' && (
          <Link to="/level" onClick={onClickClose}>
            <MdTrendingUp size={23} color="#444444" />
            <strong>Nível</strong>
          </Link>
        )}
        {userType === 'company' && (
          <button type="button" onClick={handleOpen}>
            <MdPeople size={23} color="#444444" />
            <strong>Membros</strong>
          </button>
        )}
        <button type="button" onClick={handleLogout}>
          <MdExitToApp size={23} color="#ff0000" />
          <strong>Sair</strong>
        </button>
      </Content>
      <Members open={open} handleClose={handleClose} />
    </Container>
  );
}
