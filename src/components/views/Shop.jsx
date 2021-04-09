import React, { useContext, useState, useEffect } from "react";
import ItemList from "./../ItemList";
import CartList from "./../CartList";
import { dbContext } from "../../contexts/DbContextProvider";
import Search from "./../Search";
import { NavLink } from "react-router-dom";

const Shop = () => {
  const { cartItems, user, items, getItems } = useContext(dbContext);
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
  let cart;
  if (cartItems.length > 0) {
    if (user) {
      button = (
        <NavLink className="btn btn-success" to="/completedOrder">
          Lägg beställning
        </NavLink>
        // <button className="btn btn-success" onClick={saveOrder}>
        //   Lägg beställning
        // </button>
        // to={{ pathname: "/itemDetails", data: { item: item } }}
      );
    } else {
      button = (
        <button className="btn btn-warning" disabled>
          Logga in först
        </button>
      );
    }
    cart = (
      <div className="card">
        <div className="card-body">
          <CartList />
          {button}
        </div>
      </div>
    );
  } else {
    cart = null; //Nothing if empty cart
  }
  return (
    <>
      <Search handleSearchChange={handleSearchChange} />
      <ItemList filteredItems={filteredItems} />
      {cart}
    </>
  );
};
export default Shop;
