import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface JounralState {
	id: number;
	title: string;
	text: string;
	tags?: string[];
	date: Date;
}

const initialState = { id: 0, title: '', text: '', date: new Date() } as JounralState;

const journalSlice = createSlice({
	name: 'journalOption',
	initialState,
	reducers: {
		updateTitle(state, action: PayloadAction<string>) {
			state.title = action.payload;
		},

		updateText(state, action: PayloadAction<string>) {
			state.text = action.payload;
		},
	},
});

export const { updateTitle, updateText } = journalSlice.actions;
export default journalSlice.reducer;
