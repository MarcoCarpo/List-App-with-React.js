import React from "react";
import { useGlobalContext } from "../context";

const Filter = () => {
  const { deleteItems, filterItems } = useGlobalContext();
  return (
    <div className="filter">
      <ul className="filter__links">
        <li>
          <button data-filter="all" onClick={(e) => filterItems(e)}>
            All
          </button>
        </li>
        <li>
          <button data-filter="taken" onClick={(e) => filterItems(e)}>
            Taken
          </button>
        </li>
        <li>
          <button data-filter="missing" onClick={(e) => filterItems(e)}>
            Missing
          </button>
        </li>
      </ul>
      <button className="filter__clear" onClick={deleteItems}>
        Clear Completed
      </button>
    </div>
  );
};

export default Filter;
