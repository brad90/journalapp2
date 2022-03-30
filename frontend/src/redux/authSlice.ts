import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Login {
	name: string;
	email: string;
	password: string;
	confirmpassword: string;
}

const user = 'hello';

const initialState = {
	user: user ? user : null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

export const register = createAsyncThunk('auth/fetchLogin', async (user: Login) => {
	try {
		const response = await axios.post('http://localhost:5000/api/auth/register', user, { headers: { 'content-type': 'text/json', 'Access-Control-Allow-Origin': '*' } });
		const data = await response.data;
		return data;
	} catch (error: any) {
		const message = error.response && error.response.data;
		// return thunkAPI.rejectWithValue(message);
	}
});

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	// NOT ASYNC
	reducers: {
		reset: (state) => {
			state.isLoading = state.isError = state.isSuccess = false;
			state.message = '';
		},
	},
	// ASYNC
	extraReducers: (builder) => {
		builder.addCase(register.pending, (state: any) => {
			console.log('fetching exercises...');
		});
		builder.addCase(register.fulfilled, (state: any) => {
			console.log('fetching exercises...');
		});
		builder.addCase(register.rejected, (state: any) => {
			console.log('fetching exercises...');
		});
	},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
