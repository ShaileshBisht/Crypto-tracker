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
  updated,
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
      <section className="cryptoCard_block">
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

        <div className="cryptoCard_price">
          <h3>current price</h3>
          <p>₹ {current_price.toLocaleString("en-IN")}</p>
        </div>

        <div className="cryptoCard_24Hour">
          <h3>Price change 24h</h3>
          <p className={ChangePercentage24 > 0 ? "green" : "red"}>
            {ChangePercentage24.toFixed(2)}%
          </p>
        </div>

        <div className="cryptoCard_1Hour">
          <h3>Price change 1h</h3>
          <p className={hourChangePercentage > 0 ? "green" : "red"}>
            {hourChangePercentage.toFixed(2)}%
          </p>
        </div>

        <div className="cryptoCard_updated">
          <h3>last updated</h3>
          <p>{updated}</p>
        </div>
      </section>
    </div>
  );
}

export default CryptoCard;
