import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

import Item from "../components/Item";

const ItemContainer = () => {
  const { items } = useGlobalContext();

  useEffect(() => {
    console.log(items);
  }, []);

  return (
    <section className="item-container">
      {items.map((item) => {
        const { id } = item;
        return <Item key={id} {...item} />;
      })}
    </section>
  );
};

export default ItemContainer;
