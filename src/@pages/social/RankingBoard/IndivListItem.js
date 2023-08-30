import { styled } from 'styled-components';
import { colors } from '../utils/palette';

// Imported Components
import { Text } from '@components/atoms/Text';
import Flex from '@components/atoms/Flex';
import MyDGText from '../Common/MyDGText';
import MyProfile from '../Common/MyProfile';

import { indivListDivSize } from '../utils/RankingBoardTexts';

const IndivListItem = ({ data }) => {
  const { rank, name, team, solved, isFollow } = data;

  return (
    <ListItemContainer>
      <ListCell
        width={indivListDivSize[0]}
        children={<BlackBold children={rank} />}
      />
      <ListCell width={indivListDivSize[1]}>
        <Flex direction="row" justify="left">
          <MyProfile width={23} />
          <RowSpace />
          <BlackBold children={name} />
        </Flex>
      </ListCell>
      <ListCell
        width={indivListDivSize[2]}
        children={<MyDGText children={team} />}
      />

      <ListCell
        width={indivListDivSize[3]}
        children={<MyDGText children={solved} />}
      />
      <ListCell width={indivListDivSize[4]}>
        {isFollow ? (
          <MyDGText children="팔로우 취소" />
        ) : (
          <RedUnderlined children="팔로우" />
        )}
      </ListCell>
    </ListItemContainer>
  );
};

const ListItemContainer = styled.tr`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  padding: 5px 0px;
  padding-left: 22px;
  width: auto;
  height: auto;

  text-align: left;
  background-color: ${colors.themeWhite};
`;

const ListCell = styled.td`
  display: block;
  width: ${({ width }) => width}px;
`;

const BlackBold = styled(Text)`
  display: inline-block;
  font:
    bold 15px 'Noto Sans KR',
    sans-serif;
`;

const RedUnderlined = styled.span`
  display: inline-block;

  word-wrap: break-word;
  word-break: keep-all;
  font-size: 15px;
  font-weight: 500;
  color: ${colors.themeRed};
  line-height: 120%;
  text-decoration: underline;

  font-family: 'Noto Sans KR', sans-serif;
`;

const RowSpace = styled.div`
  width: 4px;
`;

export default IndivListItem;
