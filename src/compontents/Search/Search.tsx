import React from 'react';

import styled from 'styled-components';
import { Button, Input } from '../../styles/components';

export const StyledSearch = styled.div`
	max-width: 300px;
	position: relative;
	margin: 0 auto;
`;

const Search = () => {
	return (
		<StyledSearch>
			<Input defaultValue="" type="text" />
			<Button>Search</Button>
		</StyledSearch>
	);
};

export default Search;
