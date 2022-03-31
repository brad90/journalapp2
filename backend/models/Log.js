const mongoose = require('mongoose');

const Log = new mongoose.Schema({
	userid: { type: String, required: true },
	title: { type: String, required: true },
	text: { type: String, required: true },
	date: { type: Date, required: true },
	tags: [{ type: String, required: false }],
});

const model = mongoose.model('Logs', Log);
module.exports = model;
