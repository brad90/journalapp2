import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { loginUser } from '../../redux/authSlice';

export default function Login() {
	const navigate = useNavigate();
	const [isMember, setIsMember] = useState(false);
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { isLoggedIn } = useSelector((state: RootState) => state.auth);

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const response = await axios.post(`http://localhost:5001/api/auth/login`, values, {
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
			});
			const data = await response.data;
			loginUser({
				userID: data._id,
				username: data.name,
			});
			navigate('/user/111/dashboard');
		} catch (error: any) {
			console.log(error.response.data);
		}
	};

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<div>
					<input name='name' id='username' type='text' placeholder='User Name' onChange={onChange} required />
					<input name='email' id='email' type='email' placeholder='Email' onChange={onChange} required />
					<input name='password' id='password' type='password' placeholder='Password' onChange={onChange} required />
					<input name='confirmPassword' id='confirmPassword' type='password' placeholder='Confirm Password' onChange={onChange} required />
					<button type='submit'>{isMember ? 'Login' : 'Sign up'}</button>
				</div>
			</form>
			<div>
				<button onClick={() => setIsMember(!isMember)}>{isMember ? 'Login' : 'Sign up'}</button>
			</div>
		</>
	);
}
