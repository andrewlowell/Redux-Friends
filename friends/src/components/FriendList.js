import React from "react";

const FriendList = props => {
  return (
    <div className="friendList">
      {props.friends.map(f => {
        return <p>{f.name}</p>
      })}
    </div>
  );
}
 
export default FriendList;