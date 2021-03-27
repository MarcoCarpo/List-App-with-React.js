import React, { useContext, useReducer } from "react";
import data from "./data";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const initialState = {
  items: data,
  isInputValid: true,
  modal: "hello",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (newItem) => {
    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  const invalidInput = () => {
    dispatch({ type: "INVALID_INPUT" });
  };

  return (
    <AppContext.Provider value={{ ...state, addItem, invalidInput }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
