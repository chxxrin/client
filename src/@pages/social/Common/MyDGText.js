import { styled } from 'styled-components';
import { colors } from '../utils/palette';

const MyDGText = ({ width, children }) => {
  return <MyDGTextContainer width={width}>{children}</MyDGTextContainer>;
};

const MyDGTextContainer = styled.span`
  display: inline-block;

  word-wrap: break-word;
  word-break: keep-all;
  font-size: 15px;
  font-weight: 500;
  color: ${colors.themeDarkGray};
  line-height: 120%;

  font-family: 'Noto Sans KR', sans-serif;

  overflow: 'hidden';
  text-overflow: 'ellipsis';
  -webkit-line-clamp: 1;
  -webkit-box-orient: 'vertical';
`;

export default MyDGText;
