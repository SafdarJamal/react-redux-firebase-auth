import { SET_USER, REMOVE_USER } from '../constants/actionTypes';

const INITIAL_STATE = null;

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case REMOVE_USER:
      return null;
    default:
      return state;
  }
};

export default user;
