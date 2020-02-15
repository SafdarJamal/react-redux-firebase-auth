import { SET_USER, REMOVE_USER } from '../constants/actionTypes';

const initialState = null;

const user = (state = initialState, action) => {
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
