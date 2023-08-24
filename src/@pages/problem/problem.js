import React from 'react';
import styled from 'styled-components';
import Weekend from './Weekend';
import AddProblem from './AddProblem';
import Card from './Card';

const Problem = () => {
  return (
    <>
      <MainContainer>
        <Weekend />
        <AddProblem />
        {/* <Card /> */}
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
