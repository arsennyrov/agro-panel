import { configureStore } from "@reduxjs/toolkit";
import cropReducer from "./cropSlice";
import utilReducer from "./utilSlice";

export const store = configureStore({
    reducer: {
        crops: cropReducer,
        util: utilReducer,
    },
    devTools: true,
});

// console.log('objectStore', store);