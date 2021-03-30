import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

import Item from "../components/Item";

const ItemContainer = () => {
  const { items, filter } = useGlobalContext();
  const [filteredList, setFilteredList] = useState(items);

  useEffect(() => {
    if (filter === "all") {
      setFilteredList((filteredList) => {
        return items;
      });
    }
    if (filter === "taken") {
      setFilteredList((filteredList) => {
        return items.filter((item) => item.isCompleted);
      });
    }
    if (filter === "missing") {
      setFilteredList((filteredList) => {
        return items.filter((item) => !item.isCompleted);
      });
    }
  }, [filter, items]);

  if (filteredList.length > 0) {
    return (
      <section className="items-container">
        {filteredList.map((item) => {
          const { id } = item;
          return <Item key={id} {...item} />;
        })}
      </section>
    );
  }
  return null;
};

export default ItemContainer;
