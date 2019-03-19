import React from "react";
import FriendForm from './FriendForm';

const FriendList = props => {
  return (
    <div className="friendList">
      <FriendForm addFriend={props.addFriend} />
      {props.friends.map(f => {
        return <p>{f.name}, {f.age} years old, {f.email}</p>
      })}
    </div>
  );
}
 
export default FriendList;