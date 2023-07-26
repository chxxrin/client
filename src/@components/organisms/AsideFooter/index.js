import Flex from '@components/atoms/Flex';
import { Text } from '@components/atoms/Text';
import React from 'react';
import { Link } from 'react-router-dom';

const AsideFooter = () => {
  return (
    <Flex>
      <Link
        to={'/myPage'}
        style={{ textDecoration: 'underline 1px rgba(255, 255, 255, 0.29)' }}
      >
        <Text
          cursor="pointer"
          weight={400}
          color={'rgba(255, 255, 255, 0.29)'}
          size={10}
        >
          마이페이지
        </Text>
      </Link>

      <Link
        to={'/new'}
        style={{ textDecoration: 'underline 1px rgba(255, 255, 255, 0.29)' }}
      >
        <Text
          cursor="pointer"
          weight={400}
          color={'rgba(255, 255, 255, 0.29)'}
          size={10}
        >
          새 스터디 만들기
        </Text>
      </Link>
    </Flex>
  );
};

export default AsideFooter;
