import React, { useState, useEffect } from "react";
import "./HomeDisplay.css";
import CryptoCard from "./CryptoCard";
import { createFactory } from "react";

function HomeResult() {
  const [homeData, setHomeData] = useState([]);
  console.log(homeData);

  useEffect(() => {
    const coinData = async () => {
      await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h"
      )
        .then((res) => res.json())
        .then((data) => setHomeData(data));
    };

    return coinData();
  }, []);

  return (
    <div className="homeDisplay">
      <h1>i am home display component</h1>
      <CryptoCard />
    </div>
  );
}

export default HomeResult;
