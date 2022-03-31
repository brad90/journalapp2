import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitState {
	isLoggedIn: boolean;
	username: null | string;
	userID: null | string;
}

interface User {
	userID: string | null;
	username: string;
}

const initialState: InitState = {
	isLoggedIn: false,
	username: null,
	userID: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginUser: (state, action: PayloadAction<User>) => {
			state.isLoggedIn = true;
			state.userID = action.payload.userID;
			state.username = action.payload.username;
		},
		logoutUser: (state) => {
			state.isLoggedIn = false;
			state.userID = null;
			state.username = null;
		},
	},
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
