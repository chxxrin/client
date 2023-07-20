import { styled } from 'styled-components';

// Imported Compononents
import { Text } from 'src/@components/atoms/Text';
import { colors } from '../utils/palette';
import RankingCard from './RankingCard';

const RankingBox = ({ isTeam }) => {
  return (
    <RankingBoxContainer>
      <RankingTextContainer>
        <Text size="15" weight="Bold">
          {isTeam ? '스터디 랭킹' : '개인 랭킹'}
        </Text>
      </RankingTextContainer>

      <RankingCard isTeam={isTeam} />
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

  background-color: ${colors.themeBG};
  box-shadow: 0px 2px 10px 1px #00000033;
`;

export default RankingBox;
