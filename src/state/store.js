import { configureStore } from "@reduxjs/toolkit";
// import loginReducer from './login/slice';
import UserCart from "./userCart"
export default configureStore({
  reducer: {
    UserCart: UserCart,
  },
});