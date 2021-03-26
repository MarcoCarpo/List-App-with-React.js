import React from "react";

const Filter = () => {
  return (
    <div className="filter">
      <ul className="filter__links">
        <li>
          <button>All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
      <button className="filter__clear">Clear Completed</button>
    </div>
  );
};

export default Filter;
