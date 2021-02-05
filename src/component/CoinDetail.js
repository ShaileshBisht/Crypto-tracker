import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCoin } from "../features/coinSlice";
import "./CoinDetail.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "30px",
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

function CoinDetail() {
  const classes = useStyles();
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
    <div>
      {coinData.length !== 0 ? (
        <div className="coinDetail">
          <div className="coinDetail_top">
            <div className="coinDetail_top-left">
              <img src={coinData.image?.large} alt={coinData.id} />
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
          <div className="coinDetail_middle">
            <h3>
              Hashing Algorithm: <span>{coinData.hashing_algorithm}</span>
            </h3>
            <h3>
              Official Site :
              <a
                href={coinData.links?.homepage}
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>
            </h3>
            <h3>
              Market Cap Rank: <span>{coinData.market_cap_rank}</span>
            </h3>
            <h3>
              Current Price:{" "}
              <span>
                ₹{" "}
                {coinData?.market_data?.current_price?.inr?.toLocaleString(
                  "en-IN"
                )}
              </span>
            </h3>
            <h3>
              Total Volume:{" "}
              <span>
                ₹{" "}
                {coinData?.market_data?.total_volume?.inr?.toLocaleString(
                  "en-IN"
                )}
              </span>
            </h3>
            <h3>
              Price Change in 1hrs:{" "}
              <span>
                {coinData?.market_data?.price_change_percentage_1h_in_currency?.inr?.toFixed(
                  2
                )}
                %
              </span>
            </h3>
            <h3>
              Price Change in 24hrs:{" "}
              <span>
                {coinData?.market_data?.price_change_percentage_24h?.toFixed(2)}
                %
              </span>
            </h3>
            <h3>
              Price Change in 7Day:{" "}
              <span>
                {coinData?.market_data?.price_change_percentage_7d_in_currency?.inr?.toFixed(
                  2
                )}
                %
              </span>
            </h3>
            <h3>
              Price Change in 1Y:{" "}
              <span>
                {coinData?.market_data?.price_change_percentage_1y_in_currency?.inr?.toFixed(
                  2
                )}
                %
              </span>
            </h3>
          </div>
        </div>
      ) : (
        <div className={classes.root}>
          <CircularProgress />
          <CircularProgress color="secondary" />
        </div>
      )}
    </div>
  );
}

export default CoinDetail;
