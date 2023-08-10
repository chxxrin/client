import Flex from '@components/atoms/Flex';
import AsideStudyToggle from '@components/molecules/AsideStudyToggle';
import React from 'react';
import AsideStudySection from '../AsideStudySection';
import { styled } from 'styled-components';
import AsideFooter from '../AsideFooter';
import { Service } from 'src/@service/kakaoService';

const studyList = [
  {
    id: '1',
    name: '알고리즘 씹어먹기',
  },
  {
    id: '2',
    name: '멋쟁이사자처럼(서강대)',
  },
  {
    id: '3',
    name: 'Javascript로 반응형...',
  },
];

const Aside = () => {
  return (
    <AsideContainer>
      <Flex
        direction="column"
        align="flex-start"
        justify="space-between"
        height="100%"
      >
        <Flex align="start">
          <AsideStudyToggle data={studyList} />
          <AsideStudySection />
        </Flex>
        <AsideFooter />
      </Flex>
    </AsideContainer>
  );
};

const AsideContainer = styled.div`
  height: 100vh;
  width: 201px;
  background: linear-gradient(
    180deg,
    #222831 26.04%,
    #34475e 68.75%,
    #466589 100%
  );
  padding-top: 18px;
  padding-right: 10px;
  padding-bottom: 37px;
  border-radius: 0px 20px 20px 0px;
`;

export default Aside;
