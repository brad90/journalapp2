import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import axios from 'axios';

const JournalMain = styled.div`
	display: flex;
	width: 65%;
	height: 100%;
	margin: 1rem;
	padding: 1rem 0 0 3rem;

	.main-container {
		width: 100%;
	}
	.main-bar {
		display: flex;
		width: 100%;
		align-content: center;
		justify-content: space-between;
		margin-bottom: 8rem;

		p {
			align-self: center;
		}
	}

	.text-area {
		width: 100%;
		margin-top: 2rem;
		display: block;

		input {
			width: 100%;
			height: 3rem;
			border: none;
			font-size: 3rem;
			padding-bottom: 0.2rem;
			margin-bottom: 3rem;
			border-bottom: 1px solid #c0b9b9;
		}
		textarea {
			width: 100%;
			height: 45vh;
			resize: none;
			border: none;
			font-family: arial;
		}
	}

	.complete {
		display: flex;
		justify-content: end;
		margin-top: 1rem;
	}

	.btn-complete {
		background-color: green;
	}
`;

export default function Journalmain() {
	const { currentLogID, logs } = useSelector((state: RootState) => state.journal);
	const currentLog = logs.find((log) => log.id === currentLogID);
	const countWords = (text: string | undefined) => {
		return text?.split(' ').filter((str) => str != '').length || 0;
	};
	const navigate = useNavigate();
	const sampleLocation = useLocation();

	const [isValid, setIsValid] = useState<boolean>(true);
	const [wordCount, setWordCount] = useState<number>(countWords(currentLog?.text));
	const [title, setTitle] = useState(currentLog?.title || '');
	const [text, setText] = useState(currentLog?.text || '');

	const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const text = e.target.value;
		setWordCount(countWords(text));
		setText(text);
	};

	const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const sameDay = (d1: Date, d2: Date) => {
		return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
	};

	const isNewEntry = () => {
		let urlSplit = sampleLocation.pathname.split('/');
		return urlSplit[urlSplit.length - 1] === 'create' ? false : true;
	};

	const saveEntry = async () => {
		const payload = {
			userid: 123456,
			title: title,
			text: text,
			datefrom: 'soif',
		};

		try {
			const response = await axios.post('http://localhost:5001/api/logs/create', payload, {
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
			});

			const status = await response.status;
			if (status === 200) {
				navigate('/user/111/journal');
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		setTitle(currentLog?.title || '');
		setText(currentLog?.text || '');
	}, [currentLog]);

	return (
		<JournalMain>
			<div className='main-container'>
				<div className='main-bar'>
					<button className='btn' onClick={() => navigate('/user/1/journal')}>
						<AiOutlineArrowLeft />
						To Jounral
					</button>
					{!isNewEntry() && <p>{wordCount}/500</p>}
				</div>
				<div className='text-area'>
					<input type='text' placeholder='Title' maxLength={35} onChange={handleTitleInput} value={title} disabled={isNewEntry()} />
					<textarea onChange={handleTextInput} required placeholder='Start Typing ...' value={text} disabled={isNewEntry()} />
					<div className='complete'>
						<button onClick={() => saveEntry()} className={`btn ${wordCount > 0 ? 'btn-complete' : ''} ${isNewEntry() ? 'btn-hidden' : ''}`}>
							Complete
						</button>
					</div>
				</div>
			</div>
		</JournalMain>
	);
}
