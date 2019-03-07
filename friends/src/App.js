import React, { Component } from 'react';
import './App.css';
import Friendlist from './components/FriendList';
import { connect } from 'react-redux';
import { getFriends, login, addFriend } from './actions';
import LoginPage from './components/LoginPage';

class App extends Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        {this.props.loggedIn ? <Friendlist friends={this.props.friends} addFriend={this.props.addFriend} /> : <LoginPage login={this.props.login} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    gettingFriends: state.gettingFriends,
    friendsFetched: state.friendsFetched,
    friendsSaved: state.friend,
    savingFriends: state.savingFriends,
    updatingFriend: state.updatingFriend,
    friendUpdated: state.friendUpdated,
    deletingFriend: state.deletingFriend,
    friendDeleted: state.friendDeleted,
    friends: state.friends,
    error: state.error
  }
}

export default connect(mapStateToProps, { getFriends, login, addFriend })(App);
