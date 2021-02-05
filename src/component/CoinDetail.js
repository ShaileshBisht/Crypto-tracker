import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCoin } from "../features/coinSlice";
import "./CoinDetail.css";

function CoinDetail() {
  const coinId = useSelector(selectCoin);

  const [coinData, setCoinData] = useState([]);

  console.log(coinData);

  useEffect(() => {
    const coinData = async () => {
      await fetch(`https://api.coingecko.com/api/v3/coins/${coinId.uid}`)
        .then((res) => res.json())
        .then((data) => setCoinData(data));
    };

    return coinData();
  }, [coinId]);

  return <div className="coinDetail">i am coin detail</div>;
}

export default CoinDetail;
