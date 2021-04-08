import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { dbContext } from "../../contexts/DbContextProvider";

const Navigation = () => {
  const { user, setUser } = useContext(dbContext);

  let nav = "";
  if (!user) {
    nav = <NavLink to="/login">Logga in</NavLink>;
  } else {
    nav = (
      <NavLink onClick={() => setUser(undefined)} to="/">
        Logga ut
      </NavLink>
    );
  }

  return (
    <React.Fragment>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Start</NavLink>
          </li>
          <li>{nav}</li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
