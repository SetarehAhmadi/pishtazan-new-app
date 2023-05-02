import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import characterReducer from "./characters";

const reducer = {
	auth: authReducer,
	characters: characterReducer,
};

// *** initialize redux store
export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
