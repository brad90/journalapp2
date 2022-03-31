const mongoose = require('mongoose');

const User = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
	},
	{
		timestamps: true,
	},
	{ collection: 'logins' }
);

const model = mongoose.model('users', User);

module.exports = model;
