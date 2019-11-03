import { SIGN_IN } from '../constants/actionTypes';

const SignIn = payload => {
  return {
    type: SIGN_IN,
    payload
  };
};

export default SignIn;
