import { configureStore } from "@reduxjs/toolkit";
import { valorantApi } from "./valorantApi";

export const store = configureStore({
  reducer: {
    [valorantApi.reducerPath]: valorantApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(valorantApi.middleware)
})