// import axios, { AxiosResponse } from 'axios';
// import { LogsApiType, INewLog } from '../redux/type';

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = 'mongodb+srv://journal_admin:gZ86yFoRRsk63jpK@journal.l48zu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// const db = client.db('test');

// db.collection('inventory')
// 	.insertOne({
// 		item: 'canvas',
// 		qty: 100,
// 		tags: ['cotton'],
// 		size: { h: 28, w: 35.5, uom: 'cm' },
// 	})
// 	.then(function (result) {
// 		// process result
// 	});

export const getLogs = async () => {
	// client.connect((err) => {
	// 	const collection = client.db('test').collection('devices');
	// 	console.log(collection);
	// 	client.close();
	// });
};

// export const getLogs = async (userID: number, logCount: number): Promise<AxiosResponse<LogsApiType>> => {
// 	try {
// 		// await client.connect();
// 		const userLogs: AxiosResponse<LogsApiType> = await axios.get('mongodb+srv://journal_admin:gZ86yFoRRsk63jpK@journal.l48zu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// 		return userLogs;
// 	} catch (error) {
// 		throw new Error('error');
// 	}
// };
