import { styled } from 'styled-components';

import { listHeaderText, listDivSize } from '../utils/RankingBoardTexts';

import MyDGText from '../Common/MyDGText';

const ListHeader = ({ type }) => {
  return (
    <ListHeaderContainer>
      {listHeaderText[type].map((text, idx) => (
        <ListDiv key={idx} width={listDivSize[type][idx]}>
          <MyDGText>{text}</MyDGText>
        </ListDiv>
      ))}
    </ListHeaderContainer>
  );
};

const ListHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;
  text-align: left;
`;

export const ListDiv = styled.div`
  width: ${({ width }) => width}px;
`;

export default ListHeader;
