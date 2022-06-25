import { configureStore } from "@reduxjs/toolkit";
import cropReducer from "./cropSlice";
import regionReducer from "./regionSlice";
import utilReducer from "./utilSlice";

export const store = configureStore({
    reducer: {
        crops: cropReducer,
        regions: regionReducer,
        utils: utilReducer,
    },
    devTools: true,
});