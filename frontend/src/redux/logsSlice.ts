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

const initialState: { logs: [] | ILog[]; points: number; currentLogID: null | number } = {
	logs: options || [],
	points: 0,
	currentLogID: null,
};

export const logsSlice = createSlice({
	name: 'journal',
	initialState,
	reducers: {
		setLogs: (state, action: PayloadAction<ILog[] | []>) => {
			state.logs = action.payload;
			state.points = action.payload.length;
		},
		setCurrentLogId: (state, action: PayloadAction<number>) => {
			state.currentLogID = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setCurrentLogId, setLogs } = logsSlice.actions;

export default logsSlice.reducer;
