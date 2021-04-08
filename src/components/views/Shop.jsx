import React, { useContext, useState, useEffect } from "react";
import ItemList from "./../ItemList";
import ItemInput from "./../ItemInput";
import CartList from "./../CartList";
import { dbContext } from "../../contexts/DbContextProvider";
import Search from "./../Search";

const Shop = () => {
  const { cartItems, saveOrder, user, items, getItems } = useContext(dbContext);
  useEffect(() => {
    getItems();
  }, []);
  let [filteredItems, setFilteredItems] = useState(items);
  const handleSearchChange = (e) => {
    let searchValue = e.target.value;
    let newItems = items.filter((item) => {
      if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return item;
      }
    });
    setFilteredItems([...newItems]);
  };
  let button;
  //TEST
  if (cartItems.length > 0) {
    if (user) {
      button = <button onClick={saveOrder}>Lägg beställning</button>;
    } else {
      button = <button disabled>Logga in först</button>;
    }
  } else {
    button = (
      <button disabled hidden>
        Lägg beställning
      </button>
    );
  }
  return (
    <>
      <Search handleSearchChange={handleSearchChange} />
      <ItemList filteredItems={filteredItems} />
      <ItemInput />
      <CartList />
      {button}
    </>
  );
};
export default Shop;
