import { LOAD_USERS_COMPLETE } from '../Actions/app.actions';

export default (state = { users: null }, action) => {
  switch (action.type) {
    case LOAD_USERS_COMPLETE:
      return {
        ...state,
        users: action.data,
      };
    default:
      return state;
  }
};
