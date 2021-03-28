import React from "react";
import { useGlobalContext } from "../context";

const Filter = () => {
  const { deleteCompleteItems, filterItems, filter } = useGlobalContext();
  return (
    <div className="filter">
      <ul className="filter__links">
        <li>
          <button
            data-filter="all"
            onClick={(e) => filterItems(e)}
            className={filter === "all" ? "filter__active" : undefined}
          >
            All
          </button>
        </li>
        <li>
          <button
            data-filter="taken"
            onClick={(e) => filterItems(e)}
            className={filter === "taken" ? "filter__active" : undefined}
          >
            Taken
          </button>
        </li>
        <li>
          <button
            data-filter="missing"
            onClick={(e) => filterItems(e)}
            className={filter === "missing" ? "filter__active" : undefined}
          >
            Missing
          </button>
        </li>
      </ul>
      <button className="filter__clear" onClick={deleteCompleteItems}>
        Clear Completed
      </button>
    </div>
  );
};

export default Filter;
