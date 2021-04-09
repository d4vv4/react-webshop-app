import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { dbContext } from "../../contexts/DbContextProvider";

const Navigation = () => {
  const { user, setUser } = useContext(dbContext);

  let nav = "";
  if (!user) {
    nav = (
      <NavLink className="nav-link" to="/login">
        Logga in
      </NavLink>
    );
  } else {
    nav = (
      <a href="#" className="nav-link" onClick={() => setUser(undefined)}>
        Logga ut
      </a>
    );
  }

  return (
    <React.Fragment>
      <nav className="navbar navbar-light navbar-expand-lg bg-light mb-5">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">{nav}</li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">
                Shop
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
