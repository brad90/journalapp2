import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum LogType {
	Log = 'log',
	Answer = 'answer',
}

export interface ILog {
	id: number;
	type: LogType;
	title: string;
	text: string;
	date: Date;
	tags?: string[];
}

const options: ILog[] = [
	{ id: 1234, type: LogType.Log, title: '1Something happend today', text: 'Today was when i meant to the shdisuh fsuidf h sdiufh si hf ....', date: new Date() },
	{ id: 1235, type: LogType.Answer, title: '2Something happend today', text: 'Today was when i meant to the sidhfusd  sidfuhs difu  sdfhi....', date: new Date() },
	{ id: 1236, type: LogType.Log, title: '3Something happend today', text: 'Today was when i meant to the sdfhsfi uh s sdiufh ....', date: new Date() },
	{ id: 1237, type: LogType.Log, title: '4Something happend today', text: 'Today was when i meant to the ....', date: new Date() },
	{ id: 1238, type: LogType.Answer, title: '5Something happend today', text: 'Today was when i meant to the ....', date: new Date() },
	{ id: 1239, type: LogType.Answer, title: '6Something happend today', text: 'Today was when i meant to the ....', date: new Date() },
];

export interface ILogs {
	logs: ILog[];
	currentLogId: number | null;
}

const initialState: ILogs = {
	logs: options || [],
	currentLogId: null,
};

export const logsSlice = createSlice({
	name: 'journallogs',
	initialState,
	reducers: {
		setLogs: (state, action: PayloadAction<ILog[]>) => {
			state.logs = action.payload;
		},
		setCurrentLogId: (state, action: PayloadAction<number>) => {
			state.currentLogId = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setCurrentLogId } = logsSlice.actions;

export default logsSlice.reducer;
