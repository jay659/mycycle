import React, { useContext, useReducer } from "react";
import CycleContext from "./CycleContext";
import CycleReducer from "./CycleReducer";
import axios from "axios";
export default function CycleState(props) {
  const initialState = {
    cycles: null,
    loading: true,
    successMessage: null,
    bookedCycle: null,
  };

  const loadCycle = async () => {
    try {
      const res = await axios.get(`/api/cycle`);
      dispatch({
        type: "LOAD_CYCLE",
        payload: res.data,
      });
    } catch (error) {}
  };

  const bookCycle = async (form) => {
    try {
      const res = await axios.post(`/api/bookcycle`, form);
      dispatch({
        type: "BOOK_CYCLE",
        payload: res.data,
      });
    } catch (error) {}
  };

  const getBookedCycle = async () => {
    try {
      const res = await axios.get(`/api/bookcycle`);

      dispatch({
        type: "GET_BOOK_CYCLE",
        payload: res.data,
      });
    } catch (error) {}
  };

  const clearSuccessMessage = async () => {
    dispatch({ type: "CLEAR_SUCCESS_MESSAGE" });
  };
  const [state, dispatch] = useReducer(CycleReducer, initialState);

  return (
    <CycleContext.Provider
      value={{
        cycles: state.cycles,
        loading: state.loading,
        successMessage: state.successMessage,
        bookedCycle: state.bookedCycle,
        loadCycle,
        bookCycle,
        clearSuccessMessage,
        getBookedCycle,
      }}
    >
      {props.children}
    </CycleContext.Provider>
  );
}
