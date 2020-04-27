import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Logon from './pages/Logon';
import Singin from './pages/SingIn';
import Signup from './pages/SignUp';

export default function routes() {
  return (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Singin />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/" exact >
        <Logon />
      </Route>
    </Switch>
  );
}
