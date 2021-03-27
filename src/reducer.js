export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItems = [...state.items, action.payload];
      return {
        ...state,
        items: newItems,
        isInputValid: true,
      };

    case "INVALID_INPUT":
      return {
        ...state,
        isInputValid: false,
        modal: "Invalid input!",
      };

    case "DEFAULT_MODAL_TEXT":
      const total = state.items.length;
      let completed = 0;
      state.items.forEach((item) => {
        if (item.isCompleted) {
          completed = completed + 1;
        }
      });

      if (total === 0) {
        return {
          ...state,
          isInputValid: true,
          modal: "You don't have any item!",
        };
      }

      if (total === completed) {
        return {
          ...state,
          isInputValid: true,
          modal: "You have all your items!",
        };
      }
      return {
        ...state,
        isInputValid: true,
        modal: `${completed} out of ${total} items`,
      };

    case "COMPLETE_ITEM":
      const newItems2 = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
      return { ...state, items: newItems2 };

    case "DELETE_ALL_ITEMS":
      return { ...state, items: [] };

    case "FILTER_ITEMS":
      const filterType = action.payload.target.attributes.getNamedItem(
        "data-filter"
      ).value;

      return { ...state, filter: filterType };
    default:
      return state;
  }
};
