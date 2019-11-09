export function createAssignment(formData) {

  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  }

  return dispatch => {
    dispatch({type: 'CREATING_ASSIGNMENT'});
    fetch('http://localhost:3001/assignments', configObj)
    .then(r => r.json())
    .then(newAssignment => dispatch({ type: 'ASSIGNMENT_CREATED', payload: newAssignment}))
    .catch(error => alert(`There was an error (${error.message})`))
  }
}