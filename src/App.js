import React from "react";
import "./App.css";
import "./pages/homepage/Homepage.scss";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/Homepage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
