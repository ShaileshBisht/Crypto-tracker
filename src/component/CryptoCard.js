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
  ChangePercentage24,
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
      <section>
        <div className="cryptoCard_left">
          <div className="left_rank">
            <h3>rank</h3>
            <p>{rank}</p>
          </div>
          <img src={image} alt="" />
          <div className="left_name">
            <h3>Name</h3>
            <p>
              {name}({symbol})
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CryptoCard;
