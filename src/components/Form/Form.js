function Form() {
  return (
    <form className="form">
      <input
        type="text"
        name="item"
        id="item"
        placeholder="Add an item (e.g. eggs)"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
