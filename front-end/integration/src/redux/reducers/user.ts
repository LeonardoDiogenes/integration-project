import { AnyAction } from 'redux';
import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };

    default:
      return state;
  }
}

export default user;
