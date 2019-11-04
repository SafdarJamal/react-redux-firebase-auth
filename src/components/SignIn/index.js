import React from 'react';
import PropTypes from 'prop-types';

const SignIn = ({ onChange, onSubmit, error }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Sign In</h1>
        <p>{error}</p>
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

SignIn.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default SignIn;
