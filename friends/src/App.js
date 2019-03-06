import React, { Component } from 'react';
import './App.css';
import Friendlist from './components/FriendList';
import { connect } from 'react-redux';
import { getFriends } from './actions';

class App extends Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        {this.props.gettingFriends ? <p>Loading</p> : <Friendlist friends={this.props.friends} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
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

export default connect(mapStateToProps, { getFriends })(App);
