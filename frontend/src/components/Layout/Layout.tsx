import styled from 'styled-components';

import Navbar from '../Navbar/navbar';

type Props = {
	children: JSX.Element;
};

export default function Layout({ children }: Props) {
	const LayoutContainer = styled.div`
		display: flex;
		width: 100%;
		justify-content: center;

		.layout-content {
			width: 80%;
		}
	`;

	const Main = styled.div`
		width: 100%;
	`;

	return (
		<>
			<LayoutContainer>
				<div className='layout-content'>
					<Navbar />
					<Main>{children}</Main>
				</div>
			</LayoutContainer>
		</>
	);
}
