import { configureStore } from "@reduxjs/toolkit";

import optionsReducer from "./options";

const store = configureStore({
  reducer: optionsReducer,
});

export default store;
