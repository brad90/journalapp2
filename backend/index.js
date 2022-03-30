require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieparser = require('cookie-parser');

// IMPORT ROUTES
const authRoute = require('./routes/auth');

var corsOptions = {
	origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieparser());

app.get('/api', (req, res) => {
	res.send('server running');
});

app.use('/api/auth', authRoute);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log('Connected to database');

		app.listen(process.env.PORT, () => {
			console.log(`Server running on port ${process.env.PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
