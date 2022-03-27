import styled from 'styled-components';
import ListItem from '../ListItem/ListItem';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { ILog, LogType } from '../../redux/logsSlice';
import { useState } from 'react';
import { TiPlus } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const LogListContainer = styled.ul`
	width: 60%;

	.sidebar-search-date {
		padding: 1rem 0;
		text-align: left;
		width: 100%;

		.sidebar-search {
			border-radius: 2rem;
			border: 1px solid #fbfbfb;
			background-color: #fbfbfb;
			width: 100%;
			margin-bottom: 1rem;

			input {
				width: 100%;
				height: 100%;
				border: none;
				margin: 1rem;
				background-color: transparent;
			}
		}
		.sidebar-subbar {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}

	.sidebar-scroll {
		overflow-y: scroll;
		background-color: #fbfbfb;
		padding: 1rem;
		height: 65vh;
	}
`;

export default function JounrnalSidebar() {
	const { logs } = useSelector((state: RootState) => state.journallogs);

	const [searchWord, setSearchWord] = useState('');

	return (
		<LogListContainer>
			<div className='sidebar-search-date'>
				<div className='sidebar-search'>
					<input type='text' placeholder='Search ...' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchWord(e.target.value)} />
				</div>
				<div className='sidebar-subbar'>
					<h2>January 2022</h2>
					<Link to='/user/1/journal/log/create'>
						<button className='btn btn-primary'>
							New Entry <TiPlus />
						</button>
					</Link>
				</div>
			</div>
			<div className='sidebar-scroll'>
				{logs
					.filter((log) => log.title.includes(searchWord))
					.map((log: ILog) => {
						return <ListItem log={log} key={log.id} />;
					})}
			</div>
		</LogListContainer>
	);
}
