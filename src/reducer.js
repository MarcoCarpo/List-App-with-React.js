export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItems = [...state.items, action.payload];
      return {
        ...state,
        items: newItems,
        isInputValid: true,
        modal: "New item added!",
      };

    case "INVALID_INPUT":
      return {
        ...state,
        isInputValid: false,
        modal: "Invalid input!",
      };

    case "DEFAULT_MODAL_TEXT":
      const total = state.items.length;
      return {
        ...state,
        isInputValid: true,
        modal: `0 out of ${total} items`,
      };

    case "COMPLETE_ITEM":
      const newItems2 = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
      return { ...state, items: newItems2 };
  }

  return state;
};
