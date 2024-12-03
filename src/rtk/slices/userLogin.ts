import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SelectedSeatsState = {
	token: string | null;
};

const initialState: SelectedSeatsState = {
	token: null,
};
const userLoginSlice = createSlice({
	name: "userLoginToken",
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},

		clearToken: (state) => {
			state.token = null;
		},
	},
});

export const { setToken, clearToken } = userLoginSlice.actions;

export default userLoginSlice.reducer;
