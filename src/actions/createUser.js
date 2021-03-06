/* eslint-disable import/prefer-default-export */
export const createUser = (formData) => {
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formData),
  };

  return (dispatch) => {
    dispatch({ type: 'LOGGING_IN' });
    fetch('http://localhost:3001/users', configObj)
      .then((r) => r.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem('token', data.jwt);
          dispatch({ type: 'LOGGED_IN', payload: data.user });
        } else {
          const { error } = data;
          dispatch({ type: 'BAD_CREATION', payload: error });
        }
      });
  };
};
