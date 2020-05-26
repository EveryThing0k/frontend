import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignUpCompany from '../pages/SignUpCompany';
import Level from '../pages/Level';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/signupcompany">
        <SignUpCompany />
      </Route>
      <Route path="/level" isPrivate>
        <Level />
      </Route>
      <Route path="/profile" isPrivate>
        <Profile />
      </Route>
      <Route path="/" isPrivate>
        <Dashboard />
      </Route>
    </Switch>
  );
}
