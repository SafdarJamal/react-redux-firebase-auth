import React, { Component } from 'react';
import SignUp from '../../components/SignUp';

class SignUpContainer extends Component {
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
    return <SignUp onChange={this.handleChange} onSubmit={this.handleSubmit} />;
  }
}

export default SignUpContainer;
