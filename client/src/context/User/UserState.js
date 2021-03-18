import React, { useState, useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import axios from "axios";

export default function UserState(props) {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  // Sign Up User
  const Signup = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/users", formData, config);
      console.log(res.data);
      // dispatch({
      //   type: "REGISTER_SUCCESS",
      //   payload: res.data,
      // });

      // loadUser();
    } catch (err) {
      // dispatch({
      //   type: REGISTER_FAIL,
      //   payload: err.response.data.msg,
      // });
    }
  };

  // Sign In User
  const Signin = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/auth", formData, config);
      console.log(res.data);
      // dispatch({
      //   type: LOGIN_SUCCESS,
      //   payload: res.data,
      // });

      // loadUser();
    } catch (err) {
      // dispatch({
      //   type: LOGIN_FAIL,
      //   payload: err.response.data.msg,
      // });
    }
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);
  return (
    <UserContext.Provider
      value={{ name: state.name, id: state.id, Signup, Signin }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
