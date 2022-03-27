import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FC } from 'react';

const PanelComponent = styled.div`
		display: flex;
    width: 33%;



		.panel {
			width: 100%;
			padding: 2rem;
			margin: 1rem;
			text-align: left;
			border-radius: 1rem;
			background-color: #f2f3fc
		}


    .panel-link-header {
			height: 10%;
		}
		.panel-link-button {
			height: 90%;
			display: flex;
			align-items: end
			justify-content: end;
			width: 100%

			button{
				border: none;
				background-color:#6d63d5;
        background: rgb(108,99,205);
        background: linear-gradient(0deg, rgba(108,99,205,1) 0%, rgba(121,107,190,1) 100%);
				padding: 0.5rem 1rem;
				border-radius: 3rem;
				h2{
					color: white !important;
				}
			}
		}
	`;

export default function Panel({ redirect, titleText }: { redirect: string; titleText: string }) {
	return (
		<PanelComponent>
			<div className='panel'>
				<div className='panel-link-header'>
					<h2>{titleText}</h2>
				</div>
				<div className='panel-link-button'>
					<Link to={redirect}>
						<button>
							<h2>Visit now</h2>
						</button>
					</Link>
				</div>
			</div>
		</PanelComponent>
	);
}
