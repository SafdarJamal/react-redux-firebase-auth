import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as routes from '../constants/routes';

const PublicRoute = ({ user, component: Component }) =>
  !user ? <Component /> : <Navigate to={routes.HOME} />;

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(PublicRoute);
