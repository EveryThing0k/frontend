import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import userProfile from '~/assets/profile.svg';

export default function Header() {
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
          <Link to="/profile">
            <img src={userProfile} alt="Profile" />
          </Link>
        </aside>
      </Content>
    </Container>
  );
}
