export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItems = [...state.items, action.payload];
      return { ...state, items: newItems, isInputValid: true };

    case "INVALID_INPUT":
      return { ...state, isInputValid: false };
  }

  return state;
};
