import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SignIn } from '../../actions';
import { withFirebase } from '../../services/firebase';
import { authStateObserver } from '../../utils/authStateObserver';

import Header from '../../components/Header';
import Routes from '../../routes';
import Footer from '../../components/Footer';

class App extends Component {
  componentDidMount() {
    const { firebase, SignIn } = this.props;
    authStateObserver(firebase, SignIn);
  }

  render() {
    console.log(this.props.user);

    return (
      <Fragment>
        <Header />
        <Routes />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default compose(
  connect(
    mapStateToProps,
    { SignIn }
  ),
  withFirebase
)(App);
