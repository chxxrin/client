import { styled } from 'styled-components';
import { colors } from '../utils/palette';

const MyDGText = ({ children }) => {
  return <MyDGTextContainer>{children}</MyDGTextContainer>;
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
`;

export default MyDGText;
