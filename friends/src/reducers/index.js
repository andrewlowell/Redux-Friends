import { GETTING_FRIENDS, ADDING_FRIEND, SUCCESS, FAILURE, LOGIN_SUCCESS } from "../actions";
const initialState = {
  loggedIn: false,
  gettingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [{
    id: 0,
    name: 'George Washington',
    age: 432,
    email: 'founder@ballernation.america'
  }, {
    id: 1,
    name: 'Bennifer Smithington',
    age: 25,
    email: 'performedcprtoday@redcross.org'
  }],
  error: null
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case GETTING_FRIENDS:
      return {
        ...state,
        gettingFriends: true
      }
    case ADDING_FRIEND:
      return {
        ...state,
        friends: action.payload
      }
    case SUCCESS:
      return {
        ...state,
        friends: action.payload,
        gettingFriends: false
      }
    case FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingFriends: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true
      }
    default:
      return state;
  }
};