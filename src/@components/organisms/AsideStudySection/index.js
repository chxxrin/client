import Flex from '@components/atoms/Flex';
import AsideSection from '@components/molecules/AsideSection';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const sectionList = [
  {
    id: 'home',
    name: '홈',
  },
  {
    id: 'problem',
    name: '문제',
  },
  {
    id: 'social',
    name: '소셜',
  },
  {
    id: 'setting',
    name: '설정',
  },
];

const AsideStudySection = () => {
  const { pathname } = useLocation();

  return (
    <Flex width="auto" align="start" gap={15}>
      {sectionList.map((el) => (
        <AsideSection key={el.path} {...el} path={pathname.substring(1)} />
      ))}
    </Flex>
  );
};

export default AsideStudySection;
