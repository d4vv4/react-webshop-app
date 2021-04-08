import React, { useContext } from "react";
import ItemList from "./../ItemList";
import ItemInput from "./../ItemInput";
import CartList from "./../CartList";
import { dbContext } from "../../contexts/DbContextProvider";

const Shop = () => {
  const { cartItems, saveOrder, user } = useContext(dbContext);
  let button;
  if (cartItems.length > 0) {
    if (user) {
      button = <button onClick={saveOrder}>Lägg beställning</button>;
    } else {
      button = <button disabled>Logga in först</button>;
    }
  } else {
    button = <button disabled>Lägg beställning</button>;
  }
  return (
    <React.Fragment>
      <ItemList />
      <ItemInput />
      <CartList />
      {button}
    </React.Fragment>
  );
};
export default Shop;
