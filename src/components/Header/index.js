import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGN_UP}>SignUp</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGN_IN}>SignIn</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
