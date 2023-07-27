import { Flex } from 'src/@components/atoms/Flex';
import CardTextBlock from './CardTextBlock';
import { colors } from '../utils/palette';

const CardInfo = ({ data }) => {
  const { problem_count, mvp, follow, following, solved } = data;
  return (
    <Flex direction="row" justify="space-between">
      {problem_count ? (
        <CardTextBlock
          align="left"
          topText="최근 일주일 간 푼 문제"
          botColor={colors.themeRed}
          botText={`${problem_count}문제`}
        />
      ) : null}
      {mvp ? (
        <CardTextBlock
          align="left"
          topText="이번 주의 MVP"
          botColor={colors.themeRed}
          botText={mvp}
        />
      ) : null}
      {follow ? (
        <CardTextBlock
          align="center"
          topText="팔로우"
          botColor={colors.themeBlack}
          botText={`${follow}명`}
        />
      ) : null}
      {following ? (
        <CardTextBlock
          align="center"
          topText="팔로잉"
          botColor={colors.themeBlack}
          botText={`${following}명`}
        />
      ) : null}
      {solved ? (
        <CardTextBlock
          align="center"
          topText="푼 문제"
          botColor={colors.themeRed}
          botText={`${solved}문제`}
        />
      ) : null}
    </Flex>
  );
};

export default CardInfo;
