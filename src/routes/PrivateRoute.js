import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as routes from '../constants/routes';

const PrivateRoute = ({ user, component: Component }) =>
  user ? <Component /> : <Navigate to={routes.SIGN_IN} />;

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(PrivateRoute);
