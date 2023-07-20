import React from 'react';
import styled from 'styled-components';

const studies = ['스터디 1', '스터디 2', '스터디 3', '스터디 4'];

const Setting = () => {
  return (
    <SettingWrapper>
      <SettingTitle>알림</SettingTitle>
      <NotificationBox />
      <ContentWrapper>
        <StudyWrapper>
          <SettingTitle>스터디 관리</SettingTitle>
          {studies.map((study, index) => (
            <StudyBox key={index} study={study} />
          ))}
        </StudyWrapper>
        <ProfileWrapper>
          <SettingTitle>프로필 관리</SettingTitle>
          <ProfileBox />
        </ProfileWrapper>
      </ContentWrapper>
    </SettingWrapper>
  );
};

const StudyBox = ({ study }) => {
  // study prop 이용해서 각 스터디 박스 표현
  return <Box>{study} 관리 UI</Box>;
};

const ProfileBox = () => {
  // 프로필 관리 UI
  return <Box>프로필 관리 UI</Box>;
};

const NotificationBox = styled.div`
  width: 1007px;
  height: 126px;
  background: grey;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SettingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
`;

//스터디 관리 + 프로필 관리 감싸는 태그
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SettingTitle = styled.h1`
  font-size: 22px;
  color: black;
  background: white;
`;

const Box = styled.div`
  width: 495px;
  height: 195px;
  background: grey;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const StudyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

export default Setting;
