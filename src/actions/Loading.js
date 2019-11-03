import { LOADING } from '../constants/actionTypes';

const Loading = payload => {
  return {
    type: LOADING,
    payload
  };
};

export default Loading;
