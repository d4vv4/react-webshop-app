import React, { useContext } from "react";
import { dbContext } from "../contexts/DbContextProvider";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(dbContext);
  return (
    <>
      <li>
        <p>{item.title}</p>
        <button onClick={() => removeFromCart(item)}>Remove</button>
      </li>
    </>
  );
};
export default CartItem;
