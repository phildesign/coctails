import styled from 'styled-components';

interface DividerProps {
	height?: number;
	heightMob?: number;
}
export const Divider = styled.div<DividerProps>`
	height: ${({ height = 8 }) => height}px;
`;

interface TitleProps {
	weight?: 200 | 300 | 400 | 500 | 600 | 700;
}

export const Title1 = styled.h1<TitleProps>`
	font-size: 24px;
	font-weight: ${({ weight = 700 }) => weight};
`;

export const Title2 = styled.h2<TitleProps>`
	font-size: 18px;
	font-weight: ${({ weight = 700 }) => weight};
`;
