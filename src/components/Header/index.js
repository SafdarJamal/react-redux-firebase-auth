import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

const Header = () => {
  return (
    <header>
      <h1>
        <code>React Redux Firebase Auth</code>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.LANDING}>Landing</Link>
          </li>
          <li>
            <Link to={routes.SIGN_UP}>Sign Up</Link>
          </li>
          <li>
            <Link to={routes.SIGN_IN}>Sign In</Link>
          </li>
          <li>
            <Link to={routes.HOME}>Home (Protected)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
