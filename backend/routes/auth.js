const express = require('express');
const router = express.Router();

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validateRegisterInput = require('../validation/registerValidation');
const requiresAuth = require('../middleware/permissions');

// @route  POST /api/auth/register
// @desc Create a new User
// @access PUBLIC
router.post('/register', async (req, res) => {
	try {
		const { errors, isValid } = validateRegisterInput(req.body);
		if (!isValid) return res.status(400).json(errors);

		const existingEmail = await User.findOne({ email: new RegExp('^' + req.body.email + '$', 'i') });
		if (existingEmail) {
			return res.status(400).json({ error: 'There is already a user with this email' });
		}
		const hashedPassword = await bcrypt.hash(req.body.password, 12);
		const newUser = new User({
			name: req.body.name,
			email: req.body.email,
			password: hashedPassword,
		});

		const savedUser = await newUser.save();
		const userToReturn = { ...savedUser._doc };
		delete userToReturn.password;
		return res.json(userToReturn);
	} catch (err) {
		console.log(err);
		res.status(500).send(err.message);
	}
});

// @route  POST /api/auth/login
// @desc Login User and return a access token
// @access PUBLIC

router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({ email: new RegExp('^' + req.body.email + '$', 'i') });

		if (!user) {
			return res.staus(400).json({ error: 'There was a problem with your login credentials' });
		}

		const passwordMatch = await bcrypt.compare(req.body.password, user.password);

		if (!passwordMatch) {
			return res.staus(400).json({ error: 'There was a problem with your login credentials' });
		}
		const payload = { userId: user._id };
		const token = jwt.sign(payload, process.env.JWT_SECRET, {
			expiresIn: '7d',
		});

		res.cookie('access-token', token, {
			expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
		});

		const userToReturn = { ...user._doc };
		delete userToReturn.password;

		return red.json({
			token: token,
			user: userToReturn,
		});
	} catch (err) {
		return res.status(500).send.apply(err.message);
	}
});

module.exports = router;
