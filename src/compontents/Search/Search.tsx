import React from 'react';
import { BsSearch } from 'react-icons/bs';

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
			<Button>
				<BsSearch />
			</Button>
		</StyledSearch>
	);
};

export default Search;
