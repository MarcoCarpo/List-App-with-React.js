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
      <svg
        onClick={() => {
          !isCompleted && toggleEditItem(id);
        }}
        className={`item__edit ${isEdited ? "item__edit--is-editing" : ""}`}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 11.8771V15.0021H3.125L12.3417 5.78542L9.21667 2.66042L0 11.8771ZM14.7583 3.36875C15.0833 3.04375 15.0833 2.51875 14.7583 2.19375L12.8083 0.24375C12.4833 -0.08125 11.9583 -0.08125 11.6333 0.24375L10.1083 1.76875L13.2333 4.89375L14.7583 3.36875V3.36875Z" />
      </svg>
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
