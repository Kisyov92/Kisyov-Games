import { configureStore } from "@reduxjs/toolkit";

import gameReducer from "./game";

const store = configureStore({
  reducer: gameReducer,
});

export default store;
