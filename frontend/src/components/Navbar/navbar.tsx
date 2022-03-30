import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Navbar() {
	const Navbar = styled.div`
		width: 100%;
		height: fit-content;
		display: flex;
		align-items: center;
		padding: 1.5rem 0;
		justify-content: space-between;
	`;

	return (
		<Navbar>
			<div className='nav-bar-logo'>
				<Link to='/'>
					<h2>Logo</h2>
				</Link>
			</div>
			<nav className='nav-bar-nav'>
				<Link to='/login'>
					<button className='btn'>
						<a>
							<h3>Login</h3>
						</a>
					</button>
				</Link>
			</nav>
		</Navbar>
	);
}
