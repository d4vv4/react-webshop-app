import React, { useEffect, useContext } from "react";
import Item from "./Item";
import { dbContext } from "../contexts/DbContextProvider";

const ItemList = () => {
  const { items, getItems } = useContext(dbContext);
  var key = 0;
  useEffect(() => {
    getItems();
  }, []);
  // if (!items) return;
  const list = items.map((item) => {
    key = key + 1;
    return <Item key={key} item={item} />;
  });
  return (
    <>
      <ul>{list}</ul>
    </>
  );
};
export default ItemList;