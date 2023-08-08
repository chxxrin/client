import { styled } from 'styled-components';

import {
  listHeaderText,
  studyListDivSize,
  indivListDivSize,
} from '../utils/RankingBoardTexts';

import MyDGText from '../Common/MyDGText';

const ListHeader = ({ type }) => {
  const listDivSize = type === 'study' ? studyListDivSize : indivListDivSize;

  return (
    <ListHeaderContainer>
      {listHeaderText[type].map((text, idx) => (
        <ListCell key={idx} width={listDivSize[idx]}>
          <MyDGText>{text}</MyDGText>
        </ListCell>
      ))}
    </ListHeaderContainer>
  );
};

const ListHeaderContainer = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: left;

  padding-left: 22px;
  width: auto;
  height: auto;

  text-align: left;
`;

export const ListCell = styled.th`
  display: block;
  width: ${({ width }) => width}px;
`;

export default ListHeader;
