import React from 'react';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

// Imported Dummy Data

import { DummySRCD, DummyIRCD, DummySRBD, DummyIRBD } from './utils/DummyData';

// Imported Components

import { Text } from '@components/atoms/Text';
import { Space } from '@components/atoms/Space';
import Flex from '@components/atoms/Flex';
import SearchBox from './SearchBox/SearchBox';

import StudyRankingCard from './RankingCard/StudyRankingCard';
import IndivRankingCard from './RankingCard/IndivRankingCard';
import ListHeader from './RankingBoard/ListHeader';
import StudyListItem from './RankingBoard/StudyListItem';
import IndivListItem from './RankingBoard/IndivListItem';

const Social = () => {
  const [SRCD, setSRCD] = useState(undefined);
  const [IRCD, setIRCD] = useState(undefined);
  const [SRBD, setSRBD] = useState(undefined);
  const [IRBD, setIRBD] = useState(undefined);

  useEffect(() => {
    setSRCD(DummySRCD);
    setIRCD(DummyIRCD);
    setSRBD(DummySRBD);
    setIRBD(DummyIRBD);
    console.log('social.js : Data Incomming !');
  }, []);

  return (
    <SocialContainer>
      <Space height="80px" />
      <SearchBox />
      <Space height="50px" />
      <Flex direction="row" gap="20">
        <div>
          <RankingCardContainer>
            <RankingCardTitle children="스터디 랭킹" />
            <Space height="15px" />
            {!SRCD ? (
              '로딩중'
            ) : (
              <StudyRankingCard data={SRCD}></StudyRankingCard>
            )}
          </RankingCardContainer>
          <Space height="35px" />
          <table>
            <thead children={<ListHeader type="study" />} />
            <Space height="15px" />
            <tbody>
              {!SRBD
                ? '로딩중'
                : SRBD.map((it) => <StudyListItem data={it} key={it.id} />)}
            </tbody>
          </table>
        </div>
        {/* </Flex> */}
        {/* <Flex> */}
        <div>
          <RankingCardContainer>
            <RankingCardTitle children="개인 랭킹" />
            <Space height="15px" />
            {!IRCD ? (
              '로딩중'
            ) : (
              <IndivRankingCard data={IRCD}></IndivRankingCard>
            )}
          </RankingCardContainer>
          <Space height="35px" />
          <table>
            <thead children={<ListHeader type="indiv" />} />
            <Space height="15px" />
            <tbody>
              {!IRBD
                ? '로딩중'
                : IRBD.map((it) => <IndivListItem data={it} key={it.id} />)}
            </tbody>
          </table>
        </div>
      </Flex>
    </SocialContainer>
  );
};

// Styled Components

const SocialContainer = styled.div`
  padding: 0 30px;
  width: auto;
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
