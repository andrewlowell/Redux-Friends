import axios from 'axios';

export const GETTING_FRIENDS = 'GETTING_FRIENDS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const getFriends = () => dispatch => {
  const gettingFriends = {type: GETTING_FRIENDS};
  dispatch(gettingFriends);
  axios.get('http://localhost:5000/api/friends/')
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