import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { dbContext } from "../contexts/DbContextProvider";

const Item = ({ item }) => {
  const { addToCart } = useContext(dbContext);
  return (
    <>
      <li>
        <p>{item.title}</p>
        <button onClick={() => addToCart(item)}>Add to cart</button>
        <NavLink to={{ pathname: "/ItemDetails", data: { item: item } }}>
          Details
        </NavLink>
      </li>
    </>
  );
};
export default Item;
