import styled from 'styled-components';
import JounralMain from '../../components/LogEntry/LogEntry';

export default function LogEntry() {
	const LogEntryContainer = styled.div`
		display: flex;
		justify-content: center;
	`;
	return (
		<LogEntryContainer>
			<JounralMain />
		</LogEntryContainer>
	);
}
