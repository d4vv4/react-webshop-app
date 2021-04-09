import React, { useState, createContext } from "react";
import { Redirect, useHistory } from "react-router";
export const dbContext = createContext();

const DbContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState();
  const [cartItems, setCartItems] = useState([]);

  const resetCart = () => {
    setTimeout(() => {
      setCartItems([]);
    }, 1000);
  };

  const saveOrder = () => {
    let url = "http://localhost:8080/orders";
    let totalPrice = 0;
    let list = cartItems.map((item) => {
      totalPrice = totalPrice + parseInt(item.price);
      return item.title;
    });
    let currentUser = user.username;
    let data = { currentUser, list, totalPrice };
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    let newList = cartItems;
    newList.splice(cartItems.indexOf(item), 1);
    setCartItems([...newList]);
  };

  const getItems = () => {
    let url = "http://localhost:8080/items";
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setItems(result);
      });
  };
  const getOrder = async () => {
    let url = "http://localhost:8080/orders";
    return await fetch(url)
      .then((response) => response.json())
      .then((result) => {
        return result.slice(-1)[0];
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let usernameInput = e.target[0].value;
    let passwordInput = e.target[1].value;
    let url = "http://localhost:8080/users";
    let isCompleted = false;
    await fetch(url)
      .then((response) => response.json())
      .then((result) => {
        result.map((user) => {
          if (
            user.username === usernameInput &&
            user.password === passwordInput
          ) {
            setUser(user);
            isCompleted = true;
          }
        });
      });
    if (isCompleted) {
      return "success";
    }
  };

  const saveUser = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/users";
    let username = e.target[0].value;
    let password = e.target[1].value;
    let isCompleted = false;
    if (username && password) {
      let data = { username, password };
      isCompleted = true;
      await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (isCompleted) {
        return "success";
      }
    }
  };

  return (
    <dbContext.Provider
      value={{
        items,
        user,
        cartItems,
        addToCart,
        removeFromCart,
        getItems,
        handleLogin,
        saveUser,
        saveOrder,
        setUser,
        setItems,
        resetCart,
        getOrder,
      }}
    >
      {props.children}
    </dbContext.Provider>
  );
};
export default DbContextProvider;
