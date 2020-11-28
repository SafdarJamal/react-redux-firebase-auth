import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import { withFirebase } from '../../services/firebase';

import SignUp from '../../components/SignUp';

class SignUpContainer extends Component {
  state = {
    firstName: '',
    lastName: '',
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
    const { firstName, lastName, email, password } = this.state;

    firebase
      .signUp(email, password)
      .then(response =>
        firebase.addUser(response.user.uid, {
          firstName,
          lastName,
          email
        })
      )
      .then(() => firebase.getUser(firebase.auth.currentUser.uid))
      .then(querySnapshot => setUser(querySnapshot.data()))
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    const { firstName, lastName, email, password, error } = this.state;

    return (
      <SignUp
        firstName={firstName}
        lastName={lastName}
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
)(SignUpContainer);
