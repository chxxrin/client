import React from 'react';
import styled from 'styled-components';
const ProblemAddButton = () => {
  return (
    <div>
      <AddButton>문제 추가하기</AddButton>
    </div>
  );
};

export default ProblemAddButton;

const AddButton = styled.button`
  border-radius: 5px;
  background: #f05454;
  color: #fff;
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  width: 236px;
  height: 55px;
  flex-shrink: 0;
  margin-left: 32px;
  margin-top: 25px;
  margin-bottom: 25px;
`;
