import React from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import HomeDisplay from "./component/HomeDisplay";

function App() {
  return (
    <div className="app">
      <NavBar />
      <HomeDisplay />
    </div>
  );
}

export default App;
