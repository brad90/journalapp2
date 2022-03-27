const { builtinModules } = require('module');
const Validator = require('validator');
const isEmpty = require('./isEmpty');

const validateRegisterInput = (data) => {
	let errors = {};

	// check email field
	if (isEmpty(data.email)) {
		errors.email = 'Email field cannot be empty';
	} else if (!Validator.isEmail(data.email)) {
		errors.email = 'Email is invalid, please provide a valid email';
	}

	// check email field
	if (isEmpty(data.password)) {
		errors.password = 'Password field cannot be empty';
	} else if (!Validator.isLength(data.password, { min: 6, max: 150 })) {
		errors.password = 'Password is too short';
	}

	// check email field
	if (isEmpty(data.name)) {
		errors.name = 'Name field cannot be empty';
	} else if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
		errors.name = 'Name field too short';
	}

	// check confirm password
	if (isEmpty(data.confirmPassword)) {
		errors.confirmPassword = 'Confirm password field cannot be empty';
	} else if (!Validator.equals(data.password, data.confirmPassword)) {
		errors.confirmPassword = 'Passwords do not match';
	}

	return { errors, isValid: isEmpty(errors) };
};

module.exports = validateRegisterInput;
