const express = require('express');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
const router = express.Router();
const Log = require('../models/Log');

router.get('/', async (req, res) => {
	const userLogs = await Log.find({ userid: req.body.userid }).sort({ date: -1 });

	if (!userLogs) return res.status(200).json([]);

	const logs = userLogs.map((log) => {
		log.title = cryptr.decrypt(log.title);
		log.text = cryptr.decrypt(log.text);
	});

	return res.json(logs);
});

router.post('/create', async (req, res) => {
	const newLog = new Log({
		title: cryptr.encrypt(req.body.title),
		text: cryptr.encrypt(req.body.text),
		userid: req.body.userid,
		date: new Date(),
	});

	const savedLog = await newLog.save();
	return res.json(savedLog);
});

module.exports = router;
