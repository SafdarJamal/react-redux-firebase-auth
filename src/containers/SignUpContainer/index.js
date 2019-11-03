import React, { Component } from 'react';
import SignUp from '../../components/SignUp';

class SignUpContainer extends Component {
  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return <SignUp onSubmit={this.onSubmit} />;
  }
}

export default SignUpContainer;
