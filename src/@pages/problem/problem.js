import React from 'react';
import styled from 'styled-components';
import Weekend from './Weekend';
import AddProblem from './AddProblem';

const Problem = () => {
  return (
    <>
      <MainContainer>
        <Weekend />
        <AddProblem />
      </MainContainer>
    </>
  );
};

export default Problem;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;
