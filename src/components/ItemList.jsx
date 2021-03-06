import React, { useEffect, useContext } from "react";
import Item from "./Item";
import { dbContext } from "../contexts/DbContextProvider";

const ItemList = ({ filteredItems }) => {
  var key = 0;
  // if (!items) return;
  const list = filteredItems.map((item) => {
    key = key + 1;
    return <Item key={key} item={item} />;
  });
  return (
    <>
      <div className="row align-items-center">
        <ul className="col d-flex flex-wrap">{list}</ul>
      </div>
    </>
  );
};
export default ItemList;
