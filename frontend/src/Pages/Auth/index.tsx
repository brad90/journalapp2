import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/authSlice';
import axios from 'axios';

export default function Login() {
	const navigate = useNavigate();
	const [isMember, setIsMember] = useState(false);
	const [errors, setErrors] = useState(false);
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const response = await axios.post(`http://localhost:5001/api/auth/register`, values, {
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
			navigate(`/user/${data.name}/dashboard`);
		} catch (error: any) {
			console.log(error);
			setErrors(true);
		}
	};

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	return (
		<>
			{errors && <p> We were unable to sign you in. Our team are working to resolve the issue. Please try again later.</p>}
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
