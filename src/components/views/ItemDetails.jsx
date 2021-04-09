import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { dbContext } from "../../contexts/DbContextProvider";

const ItemDetails = (props) => {
  const { addToCart } = useContext(dbContext);

  return (
    <React.Fragment>
      <div className="card m-1">
        <div className="card-body">
          <h5 className="card-title">{props.location.data.item.title}</h5>
          <h6 className="card-subtitle mb-4 text-muted">
            {props.location.data.item.price} kr
          </h6>
          <p className="card-text">{props.location.data.item.description}</p>
          <button
            className="btn btn-success"
            onClick={() => addToCart(props.location.data.item)}
          >
            Lägg i varukorg
          </button>
          <NavLink className="btn btn-outline-info ml-1" to="/Shop">
            Tillbaka
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ItemDetails;
