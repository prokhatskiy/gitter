import React from 'react';
import { Route, Switch } from 'react-router';

import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

import { ROUTES } from 'Utils/constants';

function App() {
    return (
        <Switch>
            <Route exact path={ROUTES.MAIN} component={Dashboard} />
            <Route exact path={ROUTES.LOGIN} component={LoginPage} />
            <Route from={ROUTES.DEFAULT} to='/' />
        </Switch>
    );
}

export default App;
