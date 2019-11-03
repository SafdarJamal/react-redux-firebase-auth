import React from 'react';
import PropTypes from 'prop-types';

const SignIn = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit} autoComplete="off">
        <h1>Sign In</h1>
        <input type="email" name="email" placeholder="Enter your email" />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SignIn;
