import React, { createContext, useState } from "react";

const Context = createContext(); // just create context sub-module

const myObject = {
  hi: "Hello",
  name: "Peta",
};

console.log(myObject.hi);

function ContextProvider({ children }) {

  return (
    <Context.Provider value={{ myObject }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
