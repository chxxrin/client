import { styled } from 'styled-components';

// Imported Compononents
import { Text } from 'src/@components/atoms/Text';

const RankingCard = () => {
  return <RankingCardContainer></RankingCardContainer>;
};

const RankingBox = ({ rankingText }) => {
  return (
    <RankingBoxContainer>
      <RankingTextContainer>
        <Text size="15" weight="Bold">
          {rankingText}
        </Text>
      </RankingTextContainer>

      <RankingCard />
    </RankingBoxContainer>
  );
};

const RankingBoxContainer = styled.div``;

const RankingTextContainer = styled.div`
  padding: 15px 0;
  text-align: left;
`;

const RankingCardContainer = styled.div`
  width: 495px;
  height: 190px;
  border-radius: 10px;

  background-color: #fff;
  box-shadow: 0px 2px 10px 1px #00000033;
`;

export default RankingBox;
