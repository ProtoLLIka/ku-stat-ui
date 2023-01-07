import { configureStore } from "@reduxjs/toolkit";
import statReducer from "./stat";

const store = configureStore({
  reducer: statReducer,
});

export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = store.dispatch
export default store;
