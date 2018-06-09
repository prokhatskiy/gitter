import React from 'react';
import { Route, Switch } from 'react-router';

import './App.scss';

import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

import { ROUTES } from 'Utils/constants';

function App() {
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={LoginPage} />
      <Route exact path={`${ROUTES.MAIN}:roomId?`} component={Dashboard} />
      <Route from={ROUTES.DEFAULT} to='/' />
    </Switch>
  );
}

export default App;
