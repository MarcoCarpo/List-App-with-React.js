import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

import toCheck from "../assets/vectors/to-check.svg";
import checked from "../assets/vectors/checked.svg";
import edit from "../assets/vectors/edit.svg";
import remove from "../assets/vectors/delete.svg";

const Item = ({ id, name, isCompleted, isEdited }) => {
  const {
    completeItem,
    removeItem,
    toggleEditItem,
    editItem,
    closeEditing,
  } = useGlobalContext();

  const itemInputRef = useRef("");

  const editItemHandler = () => {
    if (!isCompleted) editItem(id, itemInputRef.current.value);
  };

  const submitItemHandler = (e) => {
    if (e.code === "Enter") {
      closeEditing(id);
    }
  };

  useEffect(() => {
    if (isEdited) {
      itemInputRef.current.focus();
      itemInputRef.current.select();
    }
  }, [isEdited]);

  return (
    <article className="item">
      <div className="item__desc" onClick={() => completeItem(id)}>
        <img src={isCompleted ? checked : toCheck} alt="" />
        <div className="input-container">
          <input
            ref={itemInputRef}
            className={`item__name ${
              isCompleted ? "item__name--completed" : ""
            } ${isEdited ? "item__name--editing" : ""}`}
            value={name}
            onChange={editItemHandler}
            onKeyPress={(e) => submitItemHandler(e)}
            disabled={!isEdited && "disabled"}
          />
        </div>
      </div>
      <img
        onClick={() => {
          !isCompleted && toggleEditItem(id);
        }}
        className={`item__edit ${isEdited ? "item__edit--is-editing" : ""}`}
        src={edit}
        alt="edit item"
      />
      <img
        className="item__delete"
        src={remove}
        alt="delete item"
        onClick={() => removeItem(id)}
      />
    </article>
  );
};

export default Item;
