/* eslint-disable import/prefer-default-export */
import { fetchCourses } from './fetchCourses';

export function deleteCourse(formData) {
  const authToken = localStorage.token;

  const configObj = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  };

  return (dispatch) => {
    dispatch({ type: 'DELETING_COURSE' });
    fetch(`http://localhost:3001/courses/${formData.courseId}`, configObj)
      .then((r) => r.json())
      .then((deletedCourse) => {
        dispatch({ type: 'COURSE_DELETED', payload: deletedCourse });
        dispatch({ type: 'CHANGES_MADE' });
        dispatch(fetchCourses());
      })
      .catch((error) => {
        dispatch({ type: 'BAD_REQUEST', payload: error.message });
      });
  };
}
