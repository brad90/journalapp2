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

export interface INewLog {
	type: LogType;
	title: string;
	text: string;
	date: Date;
	tags?: string[];
}

export interface TodoProps {
	todo: ITodo;
}

export type LogsApiType = {
	message: string;
	status: string;
	logs: ILog[];
};
