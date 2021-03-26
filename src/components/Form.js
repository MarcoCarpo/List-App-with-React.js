function Form() {
  return (
    <form className="form">
      <input
        className="form__input"
        type="text"
        name="item"
        id="item"
        placeholder="Add an item (e.g. eggs)"
      />
      <button className="form__btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
