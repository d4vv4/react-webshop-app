import React, { useContext } from "react";
import { dbContext } from "../contexts/DbContextProvider";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(dbContext);
  return (
    <>
      <li>
        <div className="d-flex">
          <p className="mr-2 mt-2">{item.title}</p>
          <button
            className="btn btn-outline-danger mb-2"
            onClick={() => removeFromCart(item)}
          >
            Ta bort
          </button>
        </div>
      </li>
    </>
  );
};
export default CartItem;
