import "./App.css";
import React, { useContext } from "react"; // get all of it!
import { Context } from "./ContextProvider";
import Styled from "styled-components";
import AddFriendForm from "./AddFriendForm";

const Headers = Styled.main`
  margin: auto;
  width: 60%;
  background-color: lightblue;
  h1 {
    text-align: center;
    padding: 16px;
  }
`

function App() {
  const { myObject } = useContext(Context);

  return (
    <Headers>
      <h1>{myObject.hi} {myObject.name}!!</h1>
      <AddFriendForm/>
    </Headers>
  )

}

export default App;
