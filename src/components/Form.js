import { useRef } from "react";
import { useGlobalContext } from "../context";

const Form = () => {
  const { items, isInputValid, addItem, invalidInput } = useGlobalContext();
  const inputRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputRef.current.value) {
      const newItem = {
        id: new Date().getTime(),
        name: inputRef.current.value,
        isCompleted: false,
      };

      addItem(newItem);

      inputRef.current.value = "";
    } else {
      invalidInput();
    }
  };

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
