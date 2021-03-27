import React, { useState } from "react";

import toCheck from "../assets/vectors/to-check.svg";
import checked from "../assets/vectors/checked.svg";
import edit from "../assets/vectors/edit.svg";
import remove from "../assets/vectors/delete.svg";

const Item = ({ name, isCompleted }) => {
  const [isChecked, setIsChecked] = useState(isCompleted);

  return (
    <article className="item">
      <div className="item__desc">
        <img src={isChecked ? checked : toCheck} alt="" />
        <p className="item__name">{name}</p>
      </div>
      <img className="item__edit" src={edit} alt="edit item" />
      <img className="item__delete" src={remove} alt="delete item" />
    </article>
  );
};

export default Item;
