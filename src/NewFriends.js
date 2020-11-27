import React from "react";

function NewFriends({ friends, UnFriend }) {
    console.log(friends);
  return (
    <div>
      {friends.map((friend) => {
        return (
          <ul 
          key={friend.id}>
            <li>
              <input type="checkbox" />
            </li>
            <li>{friend.name}</li>
            <li>
                <button className="del" onClick={() => UnFriend(friend.id)} >x</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default NewFriends;
