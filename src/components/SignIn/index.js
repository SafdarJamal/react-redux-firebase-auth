import React from 'react';
import PropTypes from 'prop-types';

const SignIn = ({ email, password, handleChange, handleSubmit, error }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <p>{error}</p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default SignIn;
