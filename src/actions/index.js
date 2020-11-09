import { SET_USER, REMOVE_USER } from '../constants/actionTypes';

const setUser = payload => ({
  type: SET_USER,
  payload
});

const removeUser = () => ({
  type: REMOVE_USER
});

export { setUser, removeUser };
