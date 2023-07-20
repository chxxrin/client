import { styled } from 'styled-components';
import { colors } from '../utils/palette';

// Imported Components
import { Flex } from 'src/@components/atoms/Flex';
import { Text } from 'src/@components/atoms/Text';
import { RankingBoxStudyData } from '../utils/DummyData';
import MyButton from '../MyButton';
import MyDGText from '../MyDGText';
import RankingCardTextBlock from './RankingCardTextBlock';

const data = RankingBoxStudyData[0];

const RankingCard = () => {
  return (
    <RankingCardContainer>
      <Flex width="170px" height="140px" justify="space-between">
        <Flex justify="space-evenly" align="left">
          <MyDGText>{`${data.rank}위 | ${data.lv}`}</MyDGText>
          <Text size="18" color="#000" weight="bold">
            {data.name}
          </Text>
        </Flex>
        <Flex justify="space-evenly" align="left">
          <MyDGText>스터디원</MyDGText>
        </Flex>
      </Flex>
      {/* ------------------------------------------------ */}
      <Flex width="250px" height="130px" justify="space-between">
        <Flex direction="row" justify="space-between">
          <RankingCardTextBlock
            align="left"
            botColor={colors.themeRed}
            topText="최근 일주일 간 푼 문제"
            botText="23문제"
          />
          <RankingCardTextBlock
            align="left"
            botColor={colors.themeRed}
            topText="이번 주의 MVP"
            botText="윤태호"
          />
        </Flex>
        <MyButton width="inherit" height="35px" color={colors.themeGray}>
          <MyDGText>스터디 정보 공개하지 않기</MyDGText>
        </MyButton>
      </Flex>
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

const Block = styled.div`
  width: inherit;
  height: inherit;
  background-color: red;
`;

export default RankingCard;
