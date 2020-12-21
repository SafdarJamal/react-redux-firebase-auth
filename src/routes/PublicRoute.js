import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as routes from '../constants/routes';

const PublicRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !user ? <Component {...props} /> : <Redirect push to={routes.HOME} />
    }
  />
);

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(PublicRoute);
