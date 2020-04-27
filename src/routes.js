import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'styles/style.css';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Logon from './pages/Logon';
import SingUp from './pages/SingUp';
import SingUpCompany from './pages/SingUpCompany'

export default function routes() {
  return (
    <Switch>
      <Route path="/singup">
        <SingUp />
      </Route>
      <Route path="/singupcompany">
        <SingUpCompany />
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
