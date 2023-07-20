import { styled } from 'styled-components';
import { colors } from './utils/palette';

const MyDGText = ({ children }) => {
  return <MyDGTextContainer>{children}</MyDGTextContainer>;
};

const MyDGTextContainer = styled.span`
  word-wrap: break-word;
  word-break: keep-all;
  font-size: 15px;
  font-weight: 500;
  color: ${colors.themeDarkGray};
  line-height: 120%;
  font-family: 'Pretendard-Regular';
`;

export default MyDGText;
