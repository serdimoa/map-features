import { LOAD_USERS_COMPLETE, SELECT_USER_BY_ID } from '../Actions/app.actions';

export default (state = { users: null, selected: null }, action) => {
  switch (action.type) {
    case LOAD_USERS_COMPLETE:
      return {
        ...state,
        users: action.data,
      };
    case SELECT_USER_BY_ID: {
      return {
        ...state,
        selected: action.id,
      };
    }
    default:
      return state;
  }
};
