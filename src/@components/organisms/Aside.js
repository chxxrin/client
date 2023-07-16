import { Flex } from '../atoms/Flex';
import React from 'react';
import { Text } from '../atoms/Text';

const Aside = () => {
  return (
    <Flex algin="start">
      <Text>홈</Text>
      <Text>문제</Text>
      <Text>소셜</Text>
      <Text>설정</Text>
    </Flex>
  );
};

export default Aside;
