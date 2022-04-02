const mongoose = require('mongoose');

const Logs = new mongoose.Schema({
	userid: { type: String, required: true },
	title: { type: String, required: true },
	text: { type: String, required: true },
	datefrom: { type: String, required: true },
	dateto: { type: Date, required: true },
	tags: [{ type: String, required: false }],
});

const model = mongoose.model('logs', Logs);
module.exports = model;
