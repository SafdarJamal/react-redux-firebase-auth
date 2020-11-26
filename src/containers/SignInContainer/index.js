import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../actions/user';
import { withFirebase } from '../../services/firebase';

import SignIn from '../../components/SignIn';

class SignInContainer extends Component {
  state = {
    email: '',
    password: '',
    error: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { firebase, setUser } = this.props;
    const { email, password } = this.state;

    firebase
      .signIn(email, password)
      .then(response => firebase.getUser(response.user.uid))
      .then(querySnapshot => setUser(querySnapshot.data()))
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <SignIn
        email={email}
        password={password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={error}
      />
    );
  }
}

export default compose(
  connect(null, { setUser }),
  withFirebase
)(SignInContainer);
