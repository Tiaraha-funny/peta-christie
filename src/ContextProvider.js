import React, { createContext, useState } from "react";

const Context = createContext(); // just create context sub-module

const myObject = {
    hi: "Hello",
    name: "Christie"
  };

  console.log(myObject.hi);

function ContextProvider({ children }) {

    const [ addFriend, setAddFriend ] = useState('')

    function handleAddFriendSubmiting(e) {
        e.preventDefault();
        console.log("I want to add some friends");
        console.log(e.target);
        const form = e.target.name.value;

        const addNewFriend = {
            name: form,
            id: Date.now()
        }

        setAddFriend([...addFriend, addNewFriend])
    }

    return (
        <Context.Provider value={{myObject, handleAddFriendSubmiting, addFriend }}>
            {children}
        </Context.Provider>
    )
    
}

export { ContextProvider, Context };