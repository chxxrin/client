import Flex from '@components/atoms/Flex';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import logo from '@imgs/solve_logo.svg';
import { Space } from '@components/atoms/Space';
import kakao from '@imgs/kakaoStart.svg';
import { Text } from '@components/atoms/Text';
import { Link } from 'react-router-dom';
import { envConfig } from 'src/config';

const Home = () => {
  const { KAKAO_REDIRECT_URI, KAKAO_API_KEY } = envConfig;

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

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
        <Link to={kakaoURL}>
          <img src={kakao} alt="kakaoLoginBtn" style={{ cursor: 'pointer' }} />
        </Link>
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
