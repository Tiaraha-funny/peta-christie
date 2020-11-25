import React, { useContext, useState } from "react";
import Style from "styled-components";
import { Context } from "./ContextProvider";

const InputStyle = Style.div`
background-color: lightgreen;
padding: 16px;
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

function AddFriendForm() {
  const { handleAddFriendSubmiting } = useContext(Context);
  const [name, setName] = useState("");

  return (
    <InputStyle>
      <form onSubmit={(e) => handleAddFriendSubmiting(name, e)}>
        <label>Add friends</label>
        <br />
        <div className="addInput">
          <input
            name="friend"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button>add</button>
        </div>
      </form>
    </InputStyle>
  );
}

export default AddFriendForm;
