import React from "react";
import { Switch, Route } from "react-router-dom";
import ItemDetails from "../views/ItemDetails";
import Login from "../views/Login";
import Shop from "../views/Shop";
import CompletedOrder from "../views/CompletedOrder";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/shop" component={Shop} />
      <Route path="/completedOrder" component={CompletedOrder} />
      <Route patch="/itemDetails/:item" component={ItemDetails} />
    </Switch>
  );
};
export default Main;
