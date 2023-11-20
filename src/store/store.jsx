import { configureStore } from "@reduxjs/toolkit";
import ApiServiceReducer, { apiService } from "./ApiServiceSlice";

export const store = configureStore({
  reducer: {
    apiService: ApiServiceReducer,
  },
});
