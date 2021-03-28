import React, { useContext, useReducer, useEffect } from "react";
import data from "./data";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const initialState = {
  items: data,
  isInputValid: true,
  modal: "0 out of 5 items",
  filter: "all",
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

  const deleteCompleteItems = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  const removeItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  const filterItems = (e) => {
    dispatch({ type: "FILTER_ITEMS", payload: e });
  };

  const toggleEditItem = (id) => {
    dispatch({ type: "TOGGLE_EDIT_ITEM", payload: id });
  };

  const editItem = (id, newName) => {
    dispatch({ type: "EDIT_ITEM", payload: { id, newName } });
  };

  const closeEditing = (id) => {
    dispatch({ type: "CLOSE_EDITING", payload: id });
  };

  useEffect(() => {
    defaultModalText();
  }, [state.items]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        addItem,
        invalidInput,
        defaultModalText,
        completeItem,
        deleteCompleteItems,
        filterItems,
        removeItem,
        toggleEditItem,
        editItem,
        closeEditing,
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
