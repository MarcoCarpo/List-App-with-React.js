import React from "react";
import { useGlobalContext } from "../context";

import toCheck from "../assets/vectors/to-check.svg";
import checked from "../assets/vectors/checked.svg";
import edit from "../assets/vectors/edit.svg";
import remove from "../assets/vectors/delete.svg";

const Item = ({ id, name, isCompleted }) => {
  const { completeItem } = useGlobalContext();

  return (
    <article className="item">
      <div className="item__desc" onClick={() => completeItem(id)}>
        <img src={isCompleted ? checked : toCheck} alt="" />
        <p className={`item__name ${isCompleted && "item__name--completed"}`}>
          {name}
        </p>
      </div>
      <img className="item__edit" src={edit} alt="edit item" />
      <img className="item__delete" src={remove} alt="delete item" />
    </article>
  );
};

export default Item;
