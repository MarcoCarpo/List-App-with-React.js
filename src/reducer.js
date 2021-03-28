// RIVEDI NOMI PER NEWITEMS 2 3 4 ...

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
        if (item.id === action.payload && !item.isEdited) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });

      return { ...state, items: newItems2 };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        items: state.items.filter((item) => !item.isCompleted),
      };

    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "FILTER_ITEMS":
      const filterType = action.payload.target.attributes.getNamedItem(
        "data-filter"
      ).value;

      return { ...state, filter: filterType };

    case "TOGGLE_EDIT_ITEM":
      const newItems3 = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isEdited: !item.isEdited };
        }
        return item;
      });
      return { ...state, items: newItems3 };

    case "EDIT_ITEM":
      const newItems4 = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, name: action.payload.newName };
        }
        return item;
      });
      return { ...state, items: newItems4 };

    case "CLOSE_EDITING":
      const newItems5 = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isEdited: false };
        }
        return item;
      });
      return { ...state, items: newItems5 };

    default:
      return state;
  }
};
