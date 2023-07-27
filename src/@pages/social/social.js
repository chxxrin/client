import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

// Imported Components

import { Text } from 'src/@components/atoms/Text';
import { Space } from 'src/@components/atoms/Space';
import { Flex } from 'src/@components/atoms/Flex';
import SearchBox from './SearchBox/SearchBox';
import RankingCard from './RankingCard/RankingCard';
import RankingBoard from './RankingBoard/RankingBoard';
import CardName from './RankingCard/CardName';
import MemberList from './RankingCard/MemberList';
import CardInfo from './RankingCard/CardInfo';
import CardButton from './RankingCard/CardButton';

// Imported Data

import {
  DummyRCSD,
  DummyRCID,
  RankingBoardStudyData,
  RankingBoardIndivData,
} from './utils/DummyData';
import IndivInfo from './RankingCard/IndivInfo';

const Social = () => {
  const [RCSD, setRCSD] = useState({});
  const [RCID, setRCID] = useState({});

  useEffect(() => {
    console.log('Data Incomming !');
    setRCSD(DummyRCSD);
    setRCID(DummyRCID);
  }, []);

  return (
    <SocialContainer>
      <Space height="80px" />
      <SearchBox />
      <Space height="50px" />
      {/* ------------------------------------------------------------- */}
      <Flex direction="row" justify="space-evenly">
        <RankingCardContainer>
          <RankingCardTitle children="스터디 랭킹" />
          <Space height="15px" />
          <RankingCard>
            <CardName data={RCSD} />
            <MemberList data={RCSD.member} />
            <CardInfo data={RCSD} />
            <CardButton is_open={RCSD.is_open} />
          </RankingCard>
        </RankingCardContainer>
        {/* ------------------------------------ */}
        <RankingCardContainer>
          <RankingCardTitle children="개인 랭킹" />
          <Space height="15px" />
          <RankingCard>
            <CardName data={RCID} />
            <IndivInfo />
            <CardInfo data={RCID} />
            <CardButton is_open={RCID.is_open} />
          </RankingCard>
        </RankingCardContainer>
      </Flex>
      {/* ------------------------------------------------------------- */}
      <Space height="30px" />
      <Flex direction="row" justify="space-evenly">
        <RankingBoard isTeam={true} data={RankingBoardStudyData} />
        <RankingBoard isTeam={false} data={RankingBoardIndivData} />
      </Flex>
    </SocialContainer>
  );
};

// Styled Components

const SocialContainer = styled.div`
  background-color: #fafafa;
`;

const RankingCardContainer = styled.div`
  text-align: left;
`;

const RankingCardTitle = styled(Text)`
  display: inline-block;
  font:
    bold 15px 'Noto Sans KR',
    sans-serif;
`;

export default Social;
