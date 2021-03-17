import React, { useState, useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

export default function UserState(props) {
  const initialState = {
    name: "kishan",
    id: "123",
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);
  return (
    <UserContext.Provider value={{ name: state.name, id: state.id }}>
      {props.children}
    </UserContext.Provider>
  );
}
