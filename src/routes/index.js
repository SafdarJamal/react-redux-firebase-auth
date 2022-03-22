import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as routes from '../constants/routes';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Landing from '../components/Landing';
import SignUpContainer from '../containers/SignUpContainer';
import SignInContainer from '../containers/SignInContainer';
import HomeContainer from '../containers/HomeContainer';
import NotFound from '../components/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={routes.LANDING}
        element={<PublicRoute component={Landing} />}
      />
      <Route
        path={routes.SIGN_UP}
        element={<PublicRoute component={SignUpContainer} />}
      />
      <Route
        path={routes.SIGN_IN}
        element={<PublicRoute component={SignInContainer} />}
      />
      <Route
        path={routes.HOME}
        element={<PrivateRoute component={HomeContainer} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
