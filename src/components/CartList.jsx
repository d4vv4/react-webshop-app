import React, { useContext } from "react";
import CartItem from "./CartItem";
import { dbContext } from "../contexts/DbContextProvider";

const CartList = () => {
  const { cartItems } = useContext(dbContext);
  // if (!cartItems) return;
  var key = 0;
  const list = cartItems.map((item) => {
    key = key + 1;
    return <CartItem key={key} item={item} />;
  });
  return (
    <>
      <ul>{list}</ul>
    </>
  );
};
export default CartList;
