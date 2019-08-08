import axios from 'axios';

const rootUrl = 'http://localhost:3000/api/v1';

const setTokenToAxios = (token) => {
  const newToken = localStorage.getItem('authToken') || '';
  axios.defaults.headers.Authorization = newToken;
}

export const getCurrentUser = (token) => {
  return (dispatch => {
    fetch(`${rootUrl}/users/me`,{
      method: "GET",
      headers: {
        "Content-type": 'appliction/json',
        "Authorization": token
      }
    })
    .then(res => res.json())
    .then(res => {
      console.log(data, "auto login");
      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        data: res.data
      })
    })
    .catch(err => {
      dispatch({type: 'USER_LOGIN_FAILED'})
    })
  })
}

export const noToken = () => {
  return(dispatch => {
    dispatch({
      type: 'NO_TOKEN'
    })
  })
}