import React from 'react';

// Imported Components
import { Flex } from 'src/@components/atoms/Flex';
import { Text } from 'src/@components/atoms/Text';
import MyDGText from '../MyDGText';

const RankingCardTextBlock = ({ align, botColor, topText, botText }) => {
  return (
    <Flex align={align} width="fit-content">
      <MyDGText>{topText}</MyDGText>
      <Text size="18" weight="bold" color={botColor}>
        {botText}
      </Text>
    </Flex>
  );
};

export default RankingCardTextBlock;
