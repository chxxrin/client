import { styled } from 'styled-components';

// Imported Compononents
import { Text } from 'src/@components/atoms/Text';

const RankingCard = () => {
  return <RankingCardContainer></RankingCardContainer>;
};

const RankingBox = ({ rankingText }) => {
  return (
    <RankingBoxContainer>
      <Text>{rankingText}</Text>
      <RankingCard />
    </RankingBoxContainer>
  );
};

const RankingBoxContainer = styled.div``;

const RankingCardContainer = styled.div`
  width: 495px;
  height: 188px;
  background-color: #aaa;
`;

export default RankingBox;
