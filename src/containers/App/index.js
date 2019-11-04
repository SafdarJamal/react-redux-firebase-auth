import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Routes from '../../routes';
import Footer from '../../components/Footer';

const App = ({ user }) => {
  console.log(user);

  return (
    <Fragment>
      <Header />
      <Routes />
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(App);
