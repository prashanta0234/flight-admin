import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "../api/auth";
import { flightsApi } from "../api/flights";

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		[flightsApi.reducerPath]: flightsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(authApi.middleware)
			.concat(flightsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;