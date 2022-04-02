import styled from 'styled-components';
import JounalLogList from '../../components/LogList';

export default function Journal() {
	const JournalContainer = styled.div`
		display: flex;
		justify-content: center;
	`;

	return (
		<JournalContainer>
			<JounalLogList />
		</JournalContainer>
	);
}
