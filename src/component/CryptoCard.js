import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { tracker } from "../features/coinSlice";
import "./CryptoCard.css";

function CryptoCard({
  coinid,
  name,
  image,
  symbol,
  current_price,
  rank,
  hourChangePercentage,
  ChangePercentage24,
  updated,
}) {
  const history = useHistory();

  const disptach = useDispatch();

  const trackerFunction = () => {
    disptach(tracker({ uid: coinid }));
    history.push("./coin/detail");
  };

  return (
    <div onClick={trackerFunction} className="cryptoCard">
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
          <p>₹ {current_price?.toLocaleString("en-IN")}</p>
        </div>

        <div className="cryptoCard_24Hour">
          <h3>Price change 24h</h3>
          <p className={ChangePercentage24 > 0 ? "green" : "red"}>
            {ChangePercentage24?.toFixed(2)}%
          </p>
        </div>

        <div className="cryptoCard_1Hour">
          <h3>Price change 1h</h3>
          <p className={hourChangePercentage > 0 ? "green" : "red"}>
            {hourChangePercentage?.toFixed(2)}%
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
