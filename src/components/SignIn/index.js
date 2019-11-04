import React from 'react';
import PropTypes from 'prop-types';

const SignIn = ({ onChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit} autoComplete="off">
        <h1>Sign In</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={onChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={onChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SignIn;
