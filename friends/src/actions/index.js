import axios from 'axios';
import axiosWithAuth from '../axiosAuth';

export const GETTING_FRIENDS = 'GETTING_FRIENDS';
export const ADDING_FRIEND = 'ADDING_FRIENDS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const getFriends = () => dispatch => {
  const gettingFriends = {type: GETTING_FRIENDS};
  dispatch(gettingFriends);
  axiosWithAuth().get('http://localhost:5000/api/friends/')
  .then(res => {
    const success = {
      type: SUCCESS,
      payload: res.data
    }
    dispatch(success);
  })
  .catch(err => {
    const failure = {
      type: FAILURE,
      payload: err
    }
    dispatch(failure);
  })
}

export const addFriend = (name, age, email) => dispatch => {
  console.log('adding friend');
  return axiosWithAuth().post('http://localhost:5000/api/friends', {
    name: name,
    age: age,
    email: email
  })
  .then(res => {
    const addingFriendo = {
      type: ADDING_FRIEND,
      payload: res.data
    }
    dispatch(addingFriendo);
  })
  .catch(err => {
    console.log('um, whoa, it went wrong');
  })
}

export const login = (username, password) => dispatch => {
  console.log('logging in!');
  return axios.post('http://localhost:5000/api/login', {
    username: username,
    password: password
  })
  .then(res => {
    const loginSuccess = {
      type: LOGIN_SUCCESS,
      payload: 'eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ'
    };
    dispatch(loginSuccess);
  })
  .catch(err => {
    console.log(err);
  });
}