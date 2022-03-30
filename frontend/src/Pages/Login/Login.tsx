import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function Login() {
	const [isMember, setIsMember] = useState(true);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	async function handleLogin() {
		const payload = {
			name: name,
			email: email,
			password: password,
			confirmPassword: confirmPassword,
		};
		try {
			const response = await axios.post('http://localhost:5001/api/auth/register', payload, {
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
			});
			const data = await response.data;
			return data.json();
		} catch (error: any) {
			console.log(error.response.data);
		}
	}

	const FormContainer = styled.div`
		max-width: 100%;
		display: flex;
		height: 90vh;
		width: 100%;
		justify-content: center;
		align-items: center;

		.form-wrapper {
			display: block;
			width: 25rem;
			height: 40rem;
			background-color: pink;
			box-shadow: -1px 0px 28px 9px rgba(230, 230, 230, 0.75);
			-webkit-box-shadow: -1px 0px 28px 9px rgba(230, 230, 230, 0.75);
			-moz-box-shadow: -1px 0px 28px 9px rgba(230, 230, 230, 0.75);

			form {
				padding: 5rem;
			}
			span {
				display: block;
				text-align: left;
				margin-bottom: 2rem;
				width: 100%;

				input {
					width: 100%;
				}
			}
		}
	`;

	return (
		<FormContainer>
			<div className='form-wrapper'>
				<h3>{isMember ? 'Login' : 'Sign Up'}</h3>
				<button onClick={() => handleLogin()}></button>
				{/* <form onSubmit={(e) => handleLogin(e)}>
					<span>
						<label htmlFor='name'>Name:</label>
						<br></br>
						<input type='email' id='name' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
					</span>
					<span>
						<label htmlFor='email'>Email:</label>
						<br></br>
						<input type='email' id='email' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
					</span>
					<span>
						<label htmlFor='password'>Password:</label>
						<br></br>
						<input type='password' id='password' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
					</span>
					<span>
						<label htmlFor='confirmpassword'>Confirm Password:</label>
						<br></br>
						<input type='password' id='confirmpassword' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} />
					</span>
					<input type='submit' value='Submit'></input>
				</form> */}
				{isMember && (
					<div>
						<p>Not already a member?</p>
						<a
							onClick={() => {
								setIsMember(false);
							}}>
							Sign up
						</a>
					</div>
				)}
				{!isMember && (
					<div>
						<a
							onClick={() => {
								setIsMember(true);
							}}>
							Login
						</a>
					</div>
				)}
			</div>
		</FormContainer>
	);
}
