import { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const Form = () => {
  const {
    items,
    isInputValid,
    addItem,
    invalidInput,
    defaultModalText,
  } = useGlobalContext();
  const inputRef = useRef("");

  const submitHandler = async (e) => {
    // Prevent the page refreshing on submit
    e.preventDefault();

    // if the input exists, create a new Item
    if (inputRef.current.value) {
      const newItem = {
        id: new Date().getTime(),
        name: inputRef.current.value,
        isCompleted: false,
      };

      // Dispatch new user, modify the state
      await addItem(newItem);

      setTimeout(() => {
        defaultModalText();
      }, 1500);

      inputRef.current.value = "";
    } else {
      await invalidInput();

      setTimeout(() => {
        defaultModalText();
      }, 1500);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
