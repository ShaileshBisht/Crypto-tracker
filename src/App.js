import React from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import HomeDisplay from "./component/HomeDisplay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomeDisplay />
          </Route>
          <Route exact path="/coin/detail">
            <h1>i am detail</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
