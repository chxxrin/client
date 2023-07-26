import React from 'react';

// Imported Compononents
import { Space } from 'src/@components/atoms/Space';
import { Flex } from 'src/@components/atoms/Flex';
import SearchBox from './SearchBox';
import RankingBox from './RankingBox/RankingBox';
import RankingBoard from './RankingBoard/RankingBoard';
import { styled } from 'styled-components';

const Social = () => {
  return (
    <SocialContainer>
      <Space height="80px" />
      <SearchBox />
      <Space height="50px" />
      <Flex direction="row" justify="space-evenly">
        <RankingBox isTeam={true} />
        <RankingBox isTeam={false} />
      </Flex>
      <Space height="30px" />
      <Flex direction="row" justify="space-evenly">
        <RankingBoard isTeam={true} />
        <RankingBoard isTeam={false} />
      </Flex>
    </SocialContainer>
  );
};

const SocialContainer = styled.div`
  background-color: #fafafa;
`;

export default Social;