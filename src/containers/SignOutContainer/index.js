import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { removeUser } from '../../actions';
import { withFirebase } from '../../services/firebase';

import SignOut from '../../components/SignOut';

class SignOutContainer extends Component {
  handleSignOut = () => {
    const { firebase, removeUser } = this.props;

    firebase
      .signOut()
      .then(() => removeUser())
      .catch(error => console.log(error.message));
  };

  render() {
    return <SignOut handleSignOut={this.handleSignOut} />;
  }
}

export default compose(
  connect(null, { removeUser }),
  withFirebase
)(SignOutContainer);
