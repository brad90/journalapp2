import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function landing() {
	const LandingContainer = styled.div`
		display: flex;
		width: 100%;

		.fold{
			width:100%
			display:flex;
		}

		.half-section {
			width: 100%;
			height: 100%;
		}

		.text-align-left{
			text-align:left
		}


	`;
	return (
		<LandingContainer>
			<div className='fold'>
				<div className='half-section text-align-left'>
					<h1>The Journalling App to improve your mental health.</h1>
					<br />
					<p>We provide your team with the simple, accessible tools they need to care for their mental health. Everything from daily stress tips to deeper, one-on-one support.</p>
					<br />
					<div>
						<Link to='/login'>
							<button className='btn btn-primary'>Sign in</button>
						</Link>
					</div>
				</div>
				<div className='half-section'>hello </div>
			</div>
		</LandingContainer>
	);
}
