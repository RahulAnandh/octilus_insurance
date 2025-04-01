import { configureStore } from "@reduxjs/toolkit";
import insuranceReducer from "./insurance/insuranceSlice";

const store = configureStore({
  reducer: {
    insurance: insuranceReducer,
  },
});

export default store;
