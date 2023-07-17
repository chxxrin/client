import React from 'react';

// Imported Compononents
import { Space } from 'src/@components/atoms/Space';
import { Flex } from 'src/@components/atoms/Flex';
import SearchBox from './SearchBox';
import RankingBox from './RankingBox';
import RankingBoard from './RankingBoard';

const Social = () => {
  return (
    <div>
      <Space margin="50px" />
      <SearchBox />
      <Space margin="50px" />
      <Flex direction="row" justify="space-evenly">
        <RankingBox rankingText="A" />
        <RankingBox rankingText="B" />
      </Flex>
      <Space margin="50px" />
      <Flex direction="row" justify="space-evenly">
        <RankingBoard />
        <RankingBoard />
      </Flex>
    </div>
  );
};

export default Social;
