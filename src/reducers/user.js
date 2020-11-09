import { SET_USER, REMOVE_USER } from '../constants/actionTypes';

const initialState = null;

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return payload;

    case REMOVE_USER:
      return null;

    default:
      return state;
  }
};

export default user;
