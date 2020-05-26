import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Popover } from '@material-ui/core';

import { Link } from 'react-router-dom';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Content, Button } from './styles';
import PopoverComp from '../Popover';
import userProfile from '~/assets/profile.svg';
import logo from '~/assets/logo.png';

export default function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.profile.name);
  const userEmail = useSelector(state => state.user.profile.email);

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleSignOut() {
    dispatch(signOut());
  }

  function handlePopOverOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handlePopOverClose() {
    setAnchorEl(null);
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="EVOK" />
          </Link>
          {/* <Link to="/suport">SUPORTE</Link> */}
        </nav>
        <aside>
          <div>
            <strong>{userName.split(' ')[0] || 'Usuário N'}</strong>
            Nível 09
          </div>
          <Button
            aria-describedby="popover-profile"
            onClick={handlePopOverOpen}
          >
            <img src={userProfile} alt="Profile" />
          </Button>
          <Popover
            id="popover-profile"
            open={anchorEl}
            anchorEl={anchorEl}
            onClose={handlePopOverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <PopoverComp
              name={userName}
              email={userEmail}
              handleLogout={handleSignOut}
              onClickClose={handlePopOverClose}
            />
          </Popover>
        </aside>
      </Content>
    </Container>
  );
}
