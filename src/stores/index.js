import { configureStore } from "@reduxjs/toolkit";
import cropReducer from "./cropSlice";
import fullReducer from "./fullSlice";
import regionReducer from "./regionSlice";
import utilReducer from "./utilSlice";

export const store = configureStore({
    reducer: {
        crops: cropReducer,
        fulls: fullReducer,
        regions: regionReducer,
        utils: utilReducer,
    },
    devTools: true,
});