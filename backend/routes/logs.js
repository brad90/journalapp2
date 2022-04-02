const express = require('express');
const router = express.Router();

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
const Logs = require('../models/Logs');

// @route  POST /api/logs/fetch
// @desc Fetch Logs from users
// @access PUBLIC
router.post('/fetch', async (req, res) => {
	try {
		const userLogs = await Logs.find({ userid: req.body.userid });

		if (!userLogs) return res.status(200).json([]);

		const logs = userLogs.map((log) => {
			log.title = cryptr.decrypt(log.title);
			log.text = cryptr.decrypt(log.text);
		});

		return res.json(logs);
	} catch (err) {
		return res.status(500).json({ error: 'Unable to fetch logs' });
	}
});

router.post('/create', async (req, res) => {
	return res.status(500).json({ error: req.body });
	try {
		const newLog = new Logs({
			title: cryptr.encrypt(req.body.title),
			text: cryptr.encrypt(req.body.text),
			userid: req.body.userid,
			dateto: new Date(),
			datefrom: req.body.datefrom,
		});

		const savedLog = await newLog.save();

		if (savedLog) return res.status(200);
	} catch (err) {
		return res.status(500).json({ error: 'Unable to save log' });
	}
});

module.exports = router;
