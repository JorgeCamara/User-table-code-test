import React from 'react';
import usersData from './data/userData.json';
import UserTable from './components/UserTable';
import styled from 'styled-components';

const StyledAppContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`;

const StyledTitle = styled.h1`
	text-decoration: underline;
	margin-bottom: 40px;
	color: #01987A;
`

function App() {
	return (
		<StyledAppContainer>
			<StyledTitle>User Table Code Test</StyledTitle>
			<UserTable users={usersData} useFilter={true}/>	
		</StyledAppContainer>
	);	
}

export default App;
