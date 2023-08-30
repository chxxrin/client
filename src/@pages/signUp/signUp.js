import Flex from '@components/atoms/Flex';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import logo from '@imgs/solve_logo.svg';
import { Space } from '@components/atoms/Space';
import { Text } from '@components/atoms/Text';
import { envConfig } from 'src/config';
import InquireInput from './components/InquireInput';
import githubService from 'src/@service/githubService';
import solvedACService from 'src/@service/solvedService';
import solveitService from 'src/@service/solveItService';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [extraInfo, setExtraInfo] = useState({
    backjoon: undefined,
    github: undefined,
    comapny: undefined,
  });
  const navigate = useNavigate();

  const getBackjoon = async (id) => {
    const { handle, profileImageUrl, tier, solvedCount } =
      await solvedACService.getUser(id);
    const backjoonData = {
      id: handle,
      profile: profileImageUrl,
      tier,
      count: solvedCount,
    };
    setExtraInfo({ ...extraInfo, backjoon: backjoonData });
  };

  const getGithub = async (id) => {
    const { login, avatar_url, name, company } = await githubService.getUser(
      id
    );
    const githubData = {
      id: login,
      profile: avatar_url,
      name,
      company,
    };
    setExtraInfo({ ...extraInfo, github: githubData });
  };

  const getCompany = (company) => {
    setExtraInfo({ ...extraInfo, company });
  };

  const patchUser = async () => {
    const data = {
      backjoon_id: extraInfo.backjoon.id,
      github_id: extraInfo.github.id,
      company: extraInfo.comapny,
    };
    try {
      const patchData = await solveitService.patchUser(data);
    } catch (err) {}
  };

  return (
    <HomeContainer>
      <Space height={'89px'} />
      <Flex align="center">
        <img src={logo} alt="logo" />
        <Space height={'18px'} />
        <Text font="d2_coding" size={27} color="white">
          solve_it()
        </Text>
        <Space height={'58px'} />
        <Flex align="start">
          <StyledLabel for="id">
            <Text font="Noto Sans KR" color="white" weight={500} size={15}>
              백준 아이디
            </Text>
          </StyledLabel>
          <Space height={'9px'} />
          <InquireInput id={'id'} setData={getBackjoon} />
          <Flex align="end">
            <Space height={'2px'} />
            <Text font="Inter" color="white" size={10} weight={400}>
              solved.ac 가입자만 이용할 수 있습니다.
            </Text>
          </Flex>
        </Flex>
        <Space height={'5px'} />
        <Flex align="start">
          <StyledLabel for="id">
            <Text font="Noto Sans KR" color="white" weight={500} size={15}>
              GitHub 아이디
            </Text>
          </StyledLabel>
          <Space height={'9px'} />
          <InquireInput id={'id'} setData={getGithub} />
        </Flex>
        <Space height={'18px'} />
        <Flex align="start">
          <StyledLabel for="id">
            <Text font="Noto Sans KR" color="white" weight={500} size={15}>
              소속 (선택)
            </Text>
          </StyledLabel>
          <Space height={'9px'} />
          <InquireInput
            id={'id'}
            isRequired={false}
            placeholder={'서강대학교, 멋쟁이사자처럼 등'}
            setData={getCompany}
          />
        </Flex>
      </Flex>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  margin: 0 auto;
  max-width: 340px;
  width: 100%;
  height: 100vh;
`;

const StyledLabel = styled.label``;

export default SignUp;
