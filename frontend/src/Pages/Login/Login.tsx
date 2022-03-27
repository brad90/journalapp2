import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import styled from 'styled-components';

import Navbar from '../../components/Navbar/navbar';

export default function Login() {
	const [type, setType] = useState('login');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleLogin(e: any) {
		e.preventDefault();
		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = response.json();
		console.log(data);
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
				<h3>{type == 'login' ? 'Login' : 'Sign Up'}</h3>
				<form onSubmit={(e) => handleLogin(e)}>
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
					<input type='submit' value='Submit'></input>
				</form>
				<h3>Or</h3>
				{/* <GoogleLogin
					clientId='263574196362-g5ke9ipq1oa985kcq019g655v6slomfg.apps.googleusercontent.com'
					buttonText='Login'
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy={'single_host_origin'}
				/> */}
				<p>Not got an account already? </p>{' '}
				<a
					onClick={() => {
						setType('signup');
					}}>
					Sign up
				</a>
			</div>
		</FormContainer>
	);
}
