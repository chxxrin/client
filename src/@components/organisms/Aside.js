import { Flex } from '../atoms/Flex';
import React from 'react';
import { Text } from '../atoms/Text';
import { Link } from 'react-router-dom';

const Aside = () => {
  return (
    <Flex algin="start">
      <Text>홈</Text>
      <Text>문제</Text>
      <Link to="/social"><Text>소셜</Text></Link>
      <Text>설정</Text>
    </Flex>
  );
};

export default Aside;
