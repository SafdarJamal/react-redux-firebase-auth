import React, { Component } from 'react';
import SignIn from '../../components/SignIn';

class SignInContainer extends Component {
  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return <SignIn onSubmit={this.onSubmit} />;
  }
}

export default SignInContainer;
