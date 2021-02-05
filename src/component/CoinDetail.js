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

  return (
    <div className="coinDetail">
      <div className="coinDetail_top">
        <div className="coinDetail_top-left">
          <img src={coinData.image.large} alt={coinData.id} />
        </div>
        <div className="coinDetail_top-right">
          <h3>
            Name: <span>{coinData.name}</span>
          </h3>
          <h3>
            Symbol: <span>{coinData.symbol}</span>
          </h3>
          <h3>
            Categories: <span>{coinData.categories}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CoinDetail;
