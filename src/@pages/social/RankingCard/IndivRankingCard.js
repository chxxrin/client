import { styled } from 'styled-components';
import { colors } from '../utils/palette';

// Imported Components
import Flex from '@components/atoms/Flex';
import CardName from './CardName';
import IndivInfo from './IndivInfo';
import CardInfo from './CardInfo';
import CardButton from './CardButton';

const IndivRankingCard = ({ data }) => {
  return (
    <RankingCardContainer>
      <Flex width="auto" height="auto" gap="16">
        <CardName data={data} />
        <IndivInfo data={data} />
      </Flex>
      <Flex width="auto" height="auto" gap="36">
        <CardInfo data={data} gap="50" />
        <CardButton is_open={data.is_open} />
      </Flex>
    </RankingCardContainer>
  );
};

const RankingCardContainer = styled.div`
  display: flex;
  gap: 43.11px;
  align-items: center;

  border-radius: 10px;
  padding: 25px;

  background-color: ${colors.themeBG};
  box-shadow: 0px 2px 10px 1px #00000033;
`;

export default IndivRankingCard;
