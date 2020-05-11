import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Content, Button } from './styles';
import userProfile from '~/assets/profile.svg';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">EVERYTHING OK</Link>
          <Link to="/suport">SUPORTE</Link>
        </nav>
        <aside>
          <div>
            <strong>Henrique Antonio</strong>
            Nível 09
          </div>
          <Button onClick={handleSignOut}>
            <img src={userProfile} alt="Profile" />
          </Button>
        </aside>
      </Content>
    </Container>
  );
}
