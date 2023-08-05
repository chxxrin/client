import React from 'react';
import styled from 'styled-components';
import Weekend from './Weekend';
import ProblemAddButton from './ProblemAddButton';
import Card from './Card';

const Exam = () => {
  return (
    <>
      <MainContainer>
        <Weekend />
        <ProblemAddButton />
        <Card />
      </MainContainer>
    </>
  );
};

export default Exam;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;
