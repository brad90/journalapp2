import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ILog, setCurrentLogId } from '../../redux/logsSlice';
import { Link } from 'react-router-dom';

const Item = styled.li`
	display: flex;
	width: 100%;
	background-color: white;
	min-height: 8rem;
	margin: 1rem 0;
	border-radius: 1rem;

	&:hover {
		cursor: pointer;
	}

	.list-item-type-color {
		background-color: #4e92f2;
		width: 5%;
		border-radius: 1rem;
	}

	.list-item-content {
		width: 100%;
		display: flex;
		padding: 1rem;
		text-align: left;

		.list-item-summary {
			width: 80%;
		}

		.list-item-date {
			display: flex;
			width: 20%;
			align-items: center;
		}
	}
`;

export default function ListItem({ log }: { log: ILog }) {
	const dispatch = useDispatch();

	const handleListSelection = (id: number | undefined) => {
		if (id) dispatch(setCurrentLogId(id));
	};

	return (
		<Link to='/user/1/journal/log/1'>
			<Item
				onClick={() => {
					handleListSelection(log.id);
				}}>
				<div className='list-item-type-color'></div>
				<div className='list-item-content'>
					<div className='list-item-summary'>
						<h4>{log.title}</h4>
						<p>{log.text.slice(0, 10) + '...' || ''}</p>
						<div className='list-items-tags'></div>
					</div>
					<div className='list-item-date'>
						<h3>Tue, 4</h3>
					</div>
				</div>
			</Item>
		</Link>
	);
}
