import React, { useContext, useState } from "react";
import Style from "styled-components";
import { Context } from "./ContextProvider";
import NewFriends from "./NewFriends";

const InputStyle = Style.div`
background-color: lightgreen;
padding: 16px;
overflow-wrap: break-word;
    label {
        font-size: 20px;
        font-weight: 600;
    }
    input, button {
        padding: 16px;
        margin-right: 10px;
        border: none;
        border-radius: 4px;
    }
    button {
        background-color: red;
        font-size: 16px;
        padding: 14px;
        cursor: pointer;
        outline: none;
    }
    .addInput {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;
let addFriend = [];

function AddFriendForm() {
  const [ on, setOn ] = useState(false);
  const [friends, setFriends] = useState([]);

  function handleAddFriendSubmiting(e) {
    e.preventDefault();
    console.log("I want to add some friends");
    const value = e.target.friend.value;

    const addNewFriend = {
      name: value,
      id: Date.now(),
    };

    addFriend.push(addNewFriend);
    setFriends([...addFriend]);
  }
  console.log(friends);

  function trueOn() {
    console.log("I will add");
    setOn(true)
  }

  console.log(on);

  function Unfriend(friendId) {
    console.log("unfriend this friend");
    const filterFriendById = friends.filter(friend => friend.id !== friendId);
    setFriends(filterFriendById);
  }

  return (
    <InputStyle>
      <form onSubmit={handleAddFriendSubmiting}>
        <label>Who are friends ?</label>
        <br />
        <div className="addInput">
          <input name="friend" placeholder="Enter your friend"></input>
          <button onClick={() => trueOn()}>add</button>
        </div>
      </form>

      <div>
        {on ? <NewFriends Unfriend={Unfriend} friends={friends} /> : ""}
      </div>
    </InputStyle>
  );
}

export default AddFriendForm;
