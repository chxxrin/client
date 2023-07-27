import { styled } from 'styled-components';
import { colors } from '../utils/palette';

// Imported Components
import Flex from '@components/atoms/Flex';

const RankingCard = ({ children }) => {
  return (
    <RankingCardContainer>
      {/* width, height 조절로 배치 조절 */}

      {!children ? (
        '로딩중'
      ) : (
        <>
          <Flex width="160px" height="140px" justify="space-between">
            {children[0]}
            {children[1]}
          </Flex>
          <Flex width="255px" height="130px" justify="space-between">
            {children[2]}
            {children[3]}
          </Flex>
        </>
      )}
    </RankingCardContainer>
  );
};

const RankingCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 495px;
  height: 190px;
  border-radius: 10px;

  background-color: ${colors.themeBG};
  box-shadow: 0px 2px 10px 1px #00000033;
`;

export default RankingCard;
