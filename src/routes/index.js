import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from '../constants/routes';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Landing from '../components/Landing';
import SignUpContainer from '../containers/SignUpContainer';
import SignInContainer from '../containers/SignInContainer';
import HomeContainer from '../containers/HomeContainer';
import NotFound from '../components/NotFound';

const Routes = () => {
  return (
    <Switch>
      <PublicRoute path={routes.LANDING} component={Landing} exact />
      <PublicRoute path={routes.SIGN_UP} component={SignUpContainer} exact />
      <PublicRoute path={routes.SIGN_IN} component={SignInContainer} exact />
      <PrivateRoute path={routes.HOME} component={HomeContainer} exact />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
