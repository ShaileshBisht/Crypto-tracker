import React, { useState, useEffect } from "react";
import "./HomeDisplay.css";
import CryptoCard from "./CryptoCard";
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

function HomeResult() {
  const classes = useStyles();
  const [homeData, setHomeData] = useState([]);

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
      {homeData.length !== 0 ? (
        <>
          {homeData.map((item) => (
            <CryptoCard
              key={item.id}
              coinid={item.id}
              name={item.name}
              image={item.image}
              symbol={item.symbol}
              current_price={item.current_price}
              rank={item.market_cap_rank}
              hourChangePercentage={item.price_change_percentage_1h_in_currency}
              ChangePercentage24={item.price_change_percentage_24h}
              updated={item.last_updated}
            />
          ))}
        </>
      ) : (
        <div className={classes.root}>
          <CircularProgress />
          <CircularProgress color="secondary" />
        </div>
      )}
    </div>
  );
}

export default HomeResult;
