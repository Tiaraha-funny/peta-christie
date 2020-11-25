import React, { useContext } from "react";
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
  const { handleAddFriendSubmiting, form } = useContext(Context);

  return (
    <InputStyle>
      <form onSubmit={handleAddFriendSubmiting}>
        <label>Add friends</label>
        <br />
        <div className="addInput">
        <input name="friend" value={form}></input>
        <button>add</button>
        </div>
      </form>
      <div>{form}</div>
    </InputStyle>
  );
}

export default AddFriendForm;
