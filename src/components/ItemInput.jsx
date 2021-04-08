import React, { useContext } from "react";
import { dbContext } from "../contexts/DbContextProvider";

const ItemInput = () => {
  const { getItems } = useContext(dbContext);
  const url = "http://localhost:8080/items";

  const HandleSubmit = async (e) => {
    e.preventDefault();
    let title = e.target[0].value;
    let price = e.target[1].value;
    let description = e.target[2].value;
    let data = { title, price, description };

    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    getItems();
  };

  return (
    <React.Fragment>
      <form onSubmit={HandleSubmit}>
        <input type="text" name="title"></input>
        <input type="text" name="price"></input>
        <input type="text" name="description"></input>
        <button type="submit">Spara</button>
      </form>
    </React.Fragment>
  );
};

export default ItemInput;
