import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { dbContext } from "../contexts/DbContextProvider";

const Item = ({ item }) => {
  const { addToCart } = useContext(dbContext);
  return (
    <>
      <li>
        <div className="card m-1">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6 className="card-subtitle mb-4 text-muted">{item.price} kr</h6>
            <button className="btn btn-success" onClick={() => addToCart(item)}>
              Lägg i varukorg
            </button>
            <NavLink
              className="btn btn-info ml-1"
              to={{ pathname: "/itemDetails", data: { item: item } }}
            >
              Detaljer
            </NavLink>
          </div>
        </div>
      </li>
    </>
  );
};
export default Item;
