import React, { useContext, useReducer } from "react";
import data from "./data";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const initialState = {
  items: data,
  isInputValid: true,
  modal: "0 out of 5 items",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (newItem) => {
    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  const invalidInput = () => {
    dispatch({ type: "INVALID_INPUT" });
  };

  const defaultModalText = () => {
    dispatch({ type: "DEFAULT_MODAL_TEXT" });
  };

  const completeItem = (id) => {
    dispatch({ type: "COMPLETE_ITEM", payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addItem,
        invalidInput,
        defaultModalText,
        completeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
