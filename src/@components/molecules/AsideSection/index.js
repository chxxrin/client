import Flex from '@components/atoms/Flex';
import { Space } from '@components/atoms/Space';
import { Text } from '@components/atoms/Text';
import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const AsideSection = ({ id, name, path }) => {
  const isCurrentPath = path === id;
  return (
    <AsideSectionContainer isCurrentPath={isCurrentPath}>
      <Flex direction="row" width="auto" justify="start">
        <Space margin={'0px 0px 0px 10px'} />
        <Link to={`/1/${id}`} style={{ textDecoration: 'none' }}>
          <Text size={20} color={isCurrentPath ? '#FFF' : '#BABCBE'}>
            {name}
          </Text>
        </Link>
      </Flex>
    </AsideSectionContainer>
  );
};

const AsideSectionContainer = styled.div`
  border-left: ${({ isCurrentPath }) =>
    isCurrentPath ? '10px solid #f05454' : '10px solid transparent'};
`;

export default AsideSection;
