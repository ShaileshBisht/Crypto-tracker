import React from "react";
import "./CryptoCard.css";

function CryptoCard({
  key,
  name,
  image,
  symbol,
  current_price,
  rank,
  hourChangePercentage,
}) {
  return (
    <div className="cryptoCard">
      {/* <h1>{key}</h1>
      <h1>{name}</h1>
      <img src={image} alt="" />
      <h1>{symbol}</h1>
      <h1>{current_price}</h1>
      <h1>{rank}</h1>
      <h1>{hourChangePercentage.toFixed(2)}</h1> */}
    </div>
  );
}

export default CryptoCard;
