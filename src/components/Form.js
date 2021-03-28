import { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const Form = () => {
  const { isInputValid, addItem, invalidInput, items, ls } = useGlobalContext();
  const inputRef = useRef("");

  const submitHandler = (e) => {
    // Prevent the page refreshing on submit
    e.preventDefault();

    // if the input exists, create a new Item
    if (inputRef.current.value) {
      const newItem = {
        id: new Date().getTime(),
        name: inputRef.current.value,
        isCompleted: false,
        isEdited: false,
      };

      // Dispatch new user, modify the state
      addItem(newItem);

      inputRef.current.value = "";
    } else {
      invalidInput();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    ls.setItem("listApp", JSON.stringify(items));
  }, [items]);

  return (
    <form className="form" autoComplete="off" onSubmit={submitHandler}>
      <input
        className={`form__input ${!isInputValid && "form__input--invalid"}`}
        type="text"
        name="item"
        id="item"
        placeholder="Add an item (e.g. eggs)"
        ref={inputRef}
      />
      <button className="form__btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
