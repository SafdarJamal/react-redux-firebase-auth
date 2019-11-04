import React, { Component } from 'react';
import SignIn from '../../components/SignIn';

class SignInContainer extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state.email, this.state.password);
  };

  render() {
    return <SignIn onChange={this.handleChange} onSubmit={this.handleSubmit} />;
  }
}

export default SignInContainer;
