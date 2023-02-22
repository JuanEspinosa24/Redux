import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import modalPostReducer from "./modalPostSlice";

export const store = configureStore({
    reducer: {
        postStore: postReducer,
        modalPostStore : modalPostReducer,
    },
});