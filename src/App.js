import React from "react";
import "./App.css";
import "./pages/homepage/Homepage.scss";
import { Route, Switch } from "react-router-dom";

import Header from './components/header/Header';
import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />{" "}
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
