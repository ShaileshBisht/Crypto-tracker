import React, { useState, useEffect } from "react";
import "./HomeDisplay.css";
import CryptoCard from "./CryptoCard";

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
      {homeData.map((item) => (
        <CryptoCard
          key={item.id}
          name={item.name}
          image={item.image}
          symbol={item.symbol}
          current_price={item.current_price}
          rank={item.market_cap_rank}
          hourChangePercentage={item.price_change_percentage_1h_in_currency}
          ChangePercentage24={item.price_change_24h}
        />
      ))}
    </div>
  );
}

export default HomeResult;
