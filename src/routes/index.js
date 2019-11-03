import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Home from '../components/Home';
import Landing from '../components/Landing';
import SignIn from '../components/SignIn';
import SignUp from '../containers/SignUpContainer';
import NotFound from '../components/NotFound';

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute path={ROUTES.HOME} component={Home} />
      <PublicRoute path={ROUTES.LANDING} component={Landing} exact />
      <PublicRoute path={ROUTES.SIGN_IN} component={SignIn} />
      <PublicRoute path={ROUTES.SIGN_UP} component={SignUp} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
