import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import productReducer from "../features/products/productSlice";
export const store = configureStore({
  reducer: {
    auth: userReducer,
    items: productReducer,
  },
});
