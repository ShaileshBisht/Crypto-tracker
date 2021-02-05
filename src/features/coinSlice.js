import { createSlice } from "@reduxjs/toolkit";

export const coinSlice = createSlice({
  name: "coin",
  initialState: {
    coin: 0,
  },
  reducers: {
    tracker: (state, action) => {
      state.coin = action.payload;
    },
  },
});

export const { tracker } = coinSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCoin = (state) => state.coin.coin;

export default coinSlice.reducer;
