import React from 'react';
import PropTypes from 'prop-types';

const SignUp = ({ onChange, onSubmit, error }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Sign Up</h1>
        <p>{error}</p>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={onChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={onChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default SignUp;
