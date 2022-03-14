import React from 'react';
import PropTypes from 'prop-types';

const SignOut = ({ handleSignOut }) => {
  return <button onClick={handleSignOut}>Sign Out</button>;
};

SignOut.propTypes = {
  handleSignOut: PropTypes.func.isRequired,
};

export default SignOut;
