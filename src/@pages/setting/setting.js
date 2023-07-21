import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const studies = ['스터디 1', '스터디 2', '스터디 3', '스터디 4'];

const Setting = () => {
  return (
    <SettingWrapper>
      <Sidebar />
      <SettingContent>
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
      </SettingContent>
    </SettingWrapper>
  );
};

const StudyBox = ({ study }) => {
  // study prop 이용해서 각 스터디 박스 표현
  return <Box>{study} 관리 UI</Box>;
};
const ProfileItem = ({ title, content, paddingLeft, fontColor }) => {
  return (
    <ProfileItemStyled paddingLeft={paddingLeft} fontColor={fontColor}>
      <ProfileTitle>{title}</ProfileTitle>
      <ProfileContent>{content}</ProfileContent>
    </ProfileItemStyled>
  );
};
const ProfileBox = () => {
  // 프로필 관리 UI
  return (
    <ProfileItemWrapper>
      <Box>
        <Row>
          <ProfileItem title="사진" content="" paddingLeft="10" />
          <ProfileItem title="3위" content="장세환" paddingLeft="20" />
          <ProfileItem title="팔로우" content="129명" paddingLeft="50" />
          <ProfileItem title="팔로잉" content="32명" paddingLeft="50" />
          <ProfileItem
            title="푼 문제"
            content="18문제"
            paddingLeft="50"
            fontColor="#F05454"
          />
        </Row>
        <Row />
        <Row />
        <Row />
        <Row>
          <IconProfileContainer />
          <Button>내 정보 수정</Button>
        </Row>
      </Box>
    </ProfileItemWrapper>
  );
};

const IconProfileItem = ({ icon, text }) => {
  return (
    <IconProfileItemStyled>
      <FontAwesomeIcon icon={icon} size="1x" />
      <IconProfileText>{text}</IconProfileText>
    </IconProfileItemStyled>
  );
};

const IconProfileContainer = () => {
  return (
    <IconProfileContainerStyled>
      <IconProfileItem icon={faUser} text="장세환" />
      <IconProfileItem icon={faGithub} text="@sehwanchang" />
      <IconProfileItem icon={faBuilding} text="서강대학교 | 멋쟁이사자처럼" />
    </IconProfileContainerStyled>
  );
};

const Sidebar = styled.div`
  width: 201px;
  height: 723px;
  background: blue;
`;

const NotificationBox = styled.div`
  width: 1007px;
  height: 126px;
  background: grey;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SettingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
`;

const SettingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
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
  background: white;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: white;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0.5px 0.5px 1.5px 1.5px gray;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row; // 가로 방향으로 조정
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 5px;
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

const ProfileItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: black;
`;
const ProfileContent = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: inherit;
`;

const ProfileItemStyled = styled.div`
  padding-top: 20px;
  padding-left: ${(props) => props.paddingLeft}px;
  width: 55px;
  height: 51px;
  color: ${(props) => props.fontColor || 'black'};
`;

const IconProfileContainerStyled = styled.div`
width : 162px
height : 75px
display : flex
flex-direction : column;
justify-content : space-around;
`;

const IconProfileItemStyled = styled.div`
  display: flex;
  align-items: center;
`;

const IconProfileText = styled.div`
  padding-left: 10px;
  color: grey;
`;

const Button = styled.button`
  width: 255px;
  height: 33px;
  font-size: 15px;
  font-weight: 500;
`;
export default Setting;
