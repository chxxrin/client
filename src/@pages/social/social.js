import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

// Imported Components

import { Text } from '@components/atoms/Text';
import { Space } from '@components/atoms/Space';
import Flex from '@components/atoms/Flex';
import SearchBox from './SearchBox/SearchBox';
import RankingCard from './RankingCard/RankingCard';
import CardName from './RankingCard/CardName';
import MemberList from './RankingCard/MemberList';
import CardInfo from './RankingCard/CardInfo';
import CardButton from './RankingCard/CardButton';
import IndivInfo from './RankingCard/IndivInfo';
import ListHeader from './RankingBoard/ListHeader';
import ListItem from './RankingBoard/ListItem';

// Imported Data

import { DummyRCSD, DummyRCID, DummyRBSD, DummyRBID } from './utils/DummyData';

const Social = () => {
  const [RCSD, setRCSD] = useState(undefined);
  const [RCID, setRCID] = useState(undefined);
  const [RBSD, setRBSD] = useState(undefined);
  const [RBID, setRBID] = useState(undefined);

  useEffect(() => {
    setRCSD(DummyRCSD);
    setRCID(DummyRCID);
    setRBSD(DummyRBSD);
    setRBID(DummyRBID);
    console.log('Data Incomming !');
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
          {!RCSD ? (
            '로딩중'
          ) : (
            <RankingCard>
              <CardName data={RCSD} />
              <MemberList data={RCSD.member} />
              <CardInfo data={RCSD} />
              <CardButton is_open={RCSD.is_open} />
            </RankingCard>
          )}
        </RankingCardContainer>
        {/* ------------------------------------ */}
        <RankingCardContainer>
          <RankingCardTitle children="개인 랭킹" />
          <Space height="15px" />
          {!RCID ? (
            '로딩중'
          ) : (
            <RankingCard>
              <CardName data={RCID} />
              <IndivInfo />
              <CardInfo data={RCID} />
              <CardButton is_open={RCID.is_open} />
            </RankingCard>
          )}
        </RankingCardContainer>
      </Flex>
      {/* ------------------------------------------------------------- */}
      <Space height="30px" />
      <Flex direction="row" justify="space-evenly">
        <RankingBoardContainer>
          <ListHeader type="study" />
          <Space height="15px" />
          <RankingBoard>
            {!RBSD
              ? '로딩중'
              : RBSD.map((it) => (
                  <ListItem type="study" data={it} key={it.id} />
                ))}
          </RankingBoard>
        </RankingBoardContainer>
        <RankingBoardContainer>
          <ListHeader type="indiv" />
          <Space height="15px" />
          <RankingBoard>
            {!RBID
              ? '로딩중'
              : RBID.map((it) => (
                  <ListItem type="indiv" data={it} key={it.id} />
                ))}
          </RankingBoard>
        </RankingBoardContainer>
      </Flex>
    </SocialContainer>
  );
};

// Styled Components

const SocialContainer = styled.div`
  background-color: #fafafa;
`;

const RankingCardContainer = styled.div`
  width: 495px;
  text-align: left;
`;

const RankingCardTitle = styled(Text)`
  display: inline-block;
  font:
    bold 15px 'Noto Sans KR',
    sans-serif;
`;

const RankingBoardContainer = styled.div`
  width: 495px;
`;

const RankingBoard = styled.div``;

export default Social;
