import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "../features/coinSlice";

export default configureStore({
  reducer: {
    coin: coinReducer,
  },
});
