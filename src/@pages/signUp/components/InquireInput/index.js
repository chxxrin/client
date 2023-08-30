import Flex from '@components/atoms/Flex';
import { Text } from '@components/atoms/Text';
import React, { useState } from 'react';
import { styled } from 'styled-components';

const InquireInput = ({ id, isRequired = true, placeholder = '', setData }) => {
  const [input, setInput] = useState('');

  const onChange = (value) => {
    if (isRequired) {
      setInput(value);
    } else {
      setData(value);
    }
  };
  return (
    <InputContainer id={id}>
      <Flex direction="row" justify="start">
        <StyledInput
          placeholder={placeholder}
          value={input}
          onChange={(e) => onChange(e.target.value)}
        />
        {isRequired ? (
          <InquireBtn onClick={() => setData(input)}>
            <Text
              cursor="pointer"
              size={13}
              color="white"
              font={'Noto Sans KR'}
            >
              조회하기
            </Text>
          </InquireBtn>
        ) : (
          ''
        )}
      </Flex>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  padding: 9px 9px 7px 9px;
  width: 100%;
  border: 1px solid #babcbe;
  background-color: #ffffff;
  border-radius: 5px;
`;

const InquireBtn = styled.button`
  padding: 3px 6px;

  background: #f05454;
  border: none;
  cursor: pointer;
`;

const StyledInput = styled.input`
  border: none;
  width: 80%;
  height: 23px;
  &:focus {
    outline: none;
  }
`;

export default InquireInput;
