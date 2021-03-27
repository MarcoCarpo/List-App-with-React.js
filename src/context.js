import React, { useContext, useReducer } from "react";
import data from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  items: data,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
