import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SignIn } from '../../actions';
import { withFirebase } from '../../services/firebase';

import SignUp from '../../components/SignUp';

class SignUpContainer extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { firebase, SignIn } = this.props;
    const { email, password } = this.state;

    firebase
      .signUp(email, password)
      .then(success => {
        const user = success.user;
        // console.log(user);

        const userData = {
          email: user.email
        };

        SignIn(userData);
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);

        this.setState({ error: errorMessage });
      });
  };

  render() {
    return (
      <SignUp
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        error={this.state.error}
      />
    );
  }
}

export default compose(
  connect(
    null,
    { SignIn }
  ),
  withFirebase
)(SignUpContainer);
