import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ user, handleSignOut }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        First Name: <strong>{user.firstName}</strong>
        <br />
        Last Name: <strong>{user.lastName}</strong>
        <br />
        Email: <strong>{user.email}</strong>
        <br />
        <button type="button" onClick={handleSignOut}>
          Sign Out
        </button>
      </p>
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.object.isRequired,
  handleSignOut: PropTypes.func.isRequired
};

export default Home;
