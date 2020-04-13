import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Logon from './pages/Logon';
import SingIn from './pages/SingIn';

export default function routes() {
  return (
    <Switch>
      <Route path="/singin">
        <SingIn />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/" >
        <Logon />
      </Route>
    </Switch>
  );
}
