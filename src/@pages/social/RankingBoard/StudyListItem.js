import { styled } from 'styled-components';
import { colors } from '../utils/palette';

// Imported Components
import { Text } from '@components/atoms/Text';
import Flex from '@components/atoms/Flex';
import MyDGText from '../Common/MyDGText';
import MyProfile from '../Common/MyProfile';

import { studyListDivSize } from '../utils/RankingBoardTexts';

const ListItem = ({ type, data }) => {
  const { rank, studyname, leader, solved, mvp } = data;

  return (
    <ListItemContainer>
      <ListCell width={studyListDivSize[0]} children={<Icon>{rank}</Icon>} />
      <ListCell
        width={studyListDivSize[1]}
        children={<BlackBold children={studyname} />}
      />
      <ListCell width={studyListDivSize[2]}>
        <Flex direction="row" justify="left">
          <MyProfile width={23} />
          <RowSpace />
          <MyDGText children={leader} />
        </Flex>
      </ListCell>
      <ListCell
        width={studyListDivSize[3]}
        children={<MyDGText children={solved} />}
      />
      <ListCell
        width={studyListDivSize[4]}
        children={<MyDGText children={mvp} />}
      />
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

const Icon = styled(Text)`
  display: inline-block;
  font:
    bold 15px 'Noto Sans KR',
    sans-serif;
`;

const BlackBold = styled(Text)`
  display: inline-block;
  width: 86px;
  font:
    bold 15px 'Noto Sans KR',
    sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const RowSpace = styled.div`
  width: 4px;
`;

export default ListItem;
