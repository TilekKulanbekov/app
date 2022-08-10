import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // post: postReducer,
  },
});

export default store;
