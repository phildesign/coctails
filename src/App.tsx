import React from 'react';

import styled from 'styled-components';
import GlobalStyles from './styles/global';
import { Container, Title1 } from './styles/components';
import Search from './compontents/Search/Search';

const App = () => {
	return (
		<Container>
			<GlobalStyles />
			<Title1 weight={700} textAlign="center">
				Coctails
			</Title1>
			<Search />
		</Container>
	);
};

export default App;
