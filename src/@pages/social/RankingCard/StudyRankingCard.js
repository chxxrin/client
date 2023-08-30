import { styled } from 'styled-components';
import { colors } from '../utils/palette';

// Imported Components
import Flex from '@components/atoms/Flex';
import CardName from './CardName';
import MemberList from './MemberList';
import CardInfo from './CardInfo';
import CardButton from './CardButton';

const StudyRankingCard = ({ data }) => {
  return (
    <RankingCardContainer>
      <Flex width="auto" height="auto" gap="35">
        <CardName data={data} />
        <MemberList data={data.member} />
      </Flex>
      <Flex width="auto" height="auto" gap="55">
        <CardInfo data={data} gap="25" />
        <CardButton is_open={data.is_open} />
      </Flex>
    </RankingCardContainer>
  );
};

const RankingCardContainer = styled.div`
  display: flex;
  gap: 53px;
  align-items: center;

  border-radius: 10px;
  padding: 25px;

  background-color: ${colors.themeBG};
  box-shadow: 0px 2px 10px 1px #00000033;
`;

export default StudyRankingCard;
