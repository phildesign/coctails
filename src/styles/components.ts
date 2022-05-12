import styled from 'styled-components';

interface DividerProps {
	height?: number;
	heightMob?: number;
}
export const Divider = styled.div<DividerProps>`
	height: ${({ height = 8 }) => height}px;
`;

export const Container = styled.div`
	max-width: 1200px;
	border: 1px solid;
	margin: 0 auto;
`;

interface TitleProps {
	textAlign?: 'left' | 'center';
	weight?: 200 | 300 | 400 | 500 | 600 | 700;
}

export const Title1 = styled.h1<TitleProps>`
	font-size: 24px;
	font-weight: ${({ weight = 700 }) => weight};
	text-align: ${({ textAlign }) => textAlign};
	margin-bottom: 20px;
`;

export const Title2 = styled.h2<TitleProps>`
	font-size: 18px;
	font-weight: ${({ weight = 700 }) => weight};
`;

export const Input = styled.input`
	width: 100%;
	display: block;
	padding: 10px;
	background: #fff;
	border-radius: 3px;
`;

export const Button = styled.button`
	position: absolute;
	top: 0;
	right: 0;
`;
