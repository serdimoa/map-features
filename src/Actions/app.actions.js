export const LOAD_USERS_COMPLETE = 'LOAD_USERS_COMPLETE';
export const loadUsersSuccess = data => ({
  type: LOAD_USERS_COMPLETE,
  data,
});

export function loadUsers() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return dispatch => fetch('http://localhost:3000/features')
    .then(response => response.json())
    .then((json) => {
      dispatch(loadUsersSuccess(json.features));
    })
    .catch((ex) => {
      throw (ex);
    });
}

export const SELECT_USER_BY_ID = 'SELECT_USER_BY_ID';
export const selectUserById = id => ({
  type: SELECT_USER_BY_ID,
  id,
});
