import React from 'react';
import { styled } from 'styled-components';

// Imported Compononents
import ListItem from './ListItem';
import { Flex } from 'src/@components/atoms/Flex';

// Imported Data
import { listHeaderText, listDivSize } from '../utils/Texts';
import { RankingBoardStudyData } from '../utils/DummyData';
import MyDGText from '../Common/MyDGText';

const RankingBoard = ({ isTeam }) => {
  return (
    <RankingBoardContainer>
      <ListHeader isTeam={isTeam} />
      {RankingBoardStudyData.map((item) => (
        <ListItem
          key={item.id}
          rank={item.rank}
          name={item.studyName}
          team={item.leader}
          solved={item.solved}
          last={item.MVP}
        />
      ))}
    </RankingBoardContainer>
  );
};

const ListHeader = ({ isTeam }) => {
  const typeText = isTeam ? 'Team' : 'Indiv';
  return (
    <ListHeaderContainer>
      {listHeaderText[typeText].map((text, idx) => (
        <ListDiv key={idx} width={listDivSize[idx]}>
          <MyDGText>{text}</MyDGText>
        </ListDiv>
      ))}
    </ListHeaderContainer>
  );
};

const RankingBoardContainer = styled.div`
  width: 495px;
`;

const ListHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  padding: 10px 5px;
  width: 100%;

  text-align: left;
`;

export const ListDiv = styled.div`
  width: ${({ width }) => width}px;
`;

export default RankingBoard;
