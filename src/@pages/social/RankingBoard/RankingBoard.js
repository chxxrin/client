import React from 'react';
import { styled } from 'styled-components';

// Imported Compononents
import ListItem from './ListItem';
import { Text } from 'src/@components/atoms/Text';

// Imported Data
import { listHeaderText } from '../utils/Texts';

const RankingBoard = ({ type }) => {
  return (
    <RankingBoardContainer>
      <ListHeader type={type} />
      <ListItem rank="1" name="이예림" team="Naver" solved="97" last="follow" />
      <ListItem rank="1" name="이예림" team="Naver" solved="97" last="follow" />
      <ListItem rank="1" name="이예림" team="Naver" solved="97" last="follow" />
      <ListItem rank="1" name="이예림" team="Naver" solved="97" last="follow" />
    </RankingBoardContainer>
  );
};

const ListHeader = ({ type }) => {
  return (
    <ListHeaderContainer>
      <Text size="15" color="#676769">
        {listHeaderText.Team[1]}
      </Text>
      <Text size="15" color="#676769">
        {listHeaderText.Team[2]}
      </Text>
      <Text size="15" color="#676769">
        {listHeaderText.Team[3]}
      </Text>
      <Text size="15" color="#676769">
        {listHeaderText.Team[4]}
      </Text>
      <Text size="15" color="#676769">
        {listHeaderText.Team[5]}
      </Text>
    </ListHeaderContainer>
  );
};

const ListHeaderContainer = styled.div`
  padding: 10px 0;
  text-align: left;
`;

const RankingBoardContainer = styled.div`
  width: 495px;
`;

export default RankingBoard;
