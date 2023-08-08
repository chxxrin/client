import Flex from '@components/atoms/Flex';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import logo from '@imgs/solve_logo.svg';
import { Space } from '@components/atoms/Space';
import kakao from '@imgs/kakaoStart.svg';
import { Text } from '@components/atoms/Text';

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <HomeContainer>
      <Space height={'89px'} />
      <Flex align="center">
        <img src={logo} alt="logo" />
        <Space height={'18px'} />
        <Text font="d2_coding" size={27} color="white">
          solve_it()
        </Text>
        <Space height={'353px'} />
        <img src={kakao} alt="kakaoLoginBtn" style={{ cursor: 'pointer' }} />
      </Flex>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  margin: 0 auto;
  width: 340px;
  height: 100vh;
`;

export default Home;
