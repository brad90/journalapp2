import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styled from 'styled-components';
import JournalSidebar from '../../components/LogList/LogList';

export default function Journal() {
	const JournalContainer = styled.div`
		display: flex;
		justify-content: center;
	`;

	const { currentLogId, logs } = useSelector((state: RootState) => state.journallogs);

	return (
		<JournalContainer>
			<JournalSidebar />
		</JournalContainer>
	);
}
