import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { dbContext } from "../../contexts/DbContextProvider";

const ItemDetails = (props) => {
  const { addToCart } = useContext(dbContext);

  return (
    <React.Fragment>
      <p>{props.location.data.item.title}</p>
      <p>{props.location.data.item.price}</p>
      <p>{props.location.data.item.description}</p>
      <button onClick={() => addToCart(props.location.data.item)}>Add to cart</button>
      <NavLink to="/Shop">Tillbaka</NavLink>
    </React.Fragment>
  );
};
export default ItemDetails;
