import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import HomeContainer from '../containers/HomeContainer';
import Landing from '../components/Landing';
import SignInContainer from '../containers/SignInContainer';
import SignUpContainer from '../containers/SignUpContainer';
import NotFound from '../components/NotFound';

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute path={ROUTES.HOME} component={HomeContainer} />
      <PublicRoute path={ROUTES.LANDING} component={Landing} exact />
      <PublicRoute path={ROUTES.SIGN_IN} component={SignInContainer} />
      <PublicRoute path={ROUTES.SIGN_UP} component={SignUpContainer} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
