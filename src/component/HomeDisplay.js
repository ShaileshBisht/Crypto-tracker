import React, { useState, useEffect } from "react";
import "./HomeDisplay.css";
import CryptoCard from "./CryptoCard";

function HomeResult() {
  const [homeData, setHomeData] = useState("");

  return (
    <div className="homeDisplay">
      <h1>i am home display component</h1>
      <CryptoCard />
    </div>
  );
}

export default HomeResult;
