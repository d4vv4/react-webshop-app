import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import ItemDetails from "../views/ItemDetails";
import Login from "../views/Login";
import Shop from "../views/Shop";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/shop" component={Shop} />
      <Route patch="/ItemDetails/:item" component={ItemDetails} />
    </Switch>
  );
};
export default Main;
