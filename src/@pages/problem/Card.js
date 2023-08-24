import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Card = ({ problemDetails }) => {
  // const [solved, setSolved] = useState(false);
  // const [visible, setVisible] = useState(true);
  // const [buttonText, setButtonText] = useState('도전하기');
  // const hasGitHubLink = true;
  // console.log('Card Component - problemDetails:', problemDetails);
  // const handleButtonClick = () => {
  //   setSolved(!solved);

  //   if (solved && hasGitHubLink) {
  //     setButtonText('커밋 내역 수정하기');
  //   } else if (solved) {
  //     setButtonText('풀었습니다!');
  //   } else {
  //     window.location.href = `https://www.acmicpc.net/problem/${problemDetails.problemDetails.problemId}`;
  //   }
  // };

  // const handleDeleteClick = () => {
  //   setVisible(false);
  // };

  // if (!visible) {
  //   return null;
  // }

  const [visible, setVisible] = useState(true);
  const hasGitHub = problemDetails.has_github;
  const commitUrl = problemDetails.commit_url;
  const isSolved = problemDetails.is_solved;

  let buttonText = '도전하기';

  const handleButtonClick = () => {
    if (isSolved) {
      if (!hasGitHub) {
        buttonText = '풀었습니다';
      } else {
        if (commitUrl === null) {
          buttonText = '커밋내역 추가하기';
        } else {
          buttonText = '커밋내역 수정하기';
        }
      }
    } else {
      buttonText = '도전하기';
      window.location.href = `https://www.acmicpc.net/problem/${problemDetails.problemDetails.problemId}`;
    }
  };

  const handleDeleteClick = () => {
    setVisible(false);
  };

  if (!visible) {
    return null; // Return null to hide the component
  }

  return (
    <MainContainer>
      <SubContainer>
        <ProblemImage />
        <Problem>
          {problemDetails && (
            <ProblemDetails>
              <ProblemNumber>
                {problemDetails.problemDetails.problemId}
              </ProblemNumber>
              <ProblemTitle>{problemDetails.problemDetails.title}</ProblemTitle>
              <ProblemTag>
                {problemDetails.problemDetails.algorithm || 'No Algorithm'}
              </ProblemTag>
            </ProblemDetails>
          )}
        </Problem>
        <People>
          <PeopleTitle>푼 사람</PeopleTitle>
          <PeopleImage src="./images/person1.png" alt="Person" />
        </People>
      </SubContainer>
      <Buttons>
        <CommitAddButton onClick={handleButtonClick} solved={isSolved}>
          {buttonText}
        </CommitAddButton>
        <DeleteButton onClick={handleDeleteClick}>삭제</DeleteButton>
      </Buttons>
    </MainContainer>
  );
};

export default Card;

const MainContainer = styled.div`
  width: 495px;
  height: 174px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  padding: 30px;
  margin-top: 25px;
  flex-direction: column;
`;

const ProblemImage = styled.div`
  width: 47px;
  height: 47px;
  margin-top: 10px;
  flex-shrink: 0;
  border-radius: 47px;
  border: 0.5px solid #babcbe;
  background: url(/images/problem1.png) 50% / cover no-repeat;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Problem = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 21px;
`;

const ProblemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const ProblemNumber = styled.div`
  color: #676769;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
`;

const ProblemTitle = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ProblemTag = styled.div`
  color: #676769;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const People = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 146px;
`;

const PeopleTitle = styled.div`
  color: #676769;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const PeopleImage = styled.div`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 0.5px solid #babcbe;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

const CommitAddButton = styled.button`
  width: 330px;
  height: 33px;
  flex-shrink: 0;
  border-radius: 5px;
  background: rgba(217, 217, 217, 0.63);
  color: #676769;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  cursor: pointer;

  &:hover {
    ${(props) =>
      !props.solved &&
      css`
        background: rgba(240, 84, 84, 0.9);
      `}
  }

  ${(props) =>
    !props.solved &&
    css`
      background-color: #f05454;
      color: white;
    `}

  /* Styles for '풀었습니다' state */
  ${(props) =>
    props.solved &&
    css`
      background: rgba(217, 217, 217, 0.63);
      color: #676769;

      &:hover {
        background: rgba(217, 217, 217, 0.9);
      }
    `}
`;

const DeleteButton = styled.button`
  width: 86px;
  height: 33px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #babcbe;
  color: #fff;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  cursor: pointer;

  &:hover {
    background: #9c9fa2;
  }
`;
