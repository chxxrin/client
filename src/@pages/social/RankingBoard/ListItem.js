import { styled } from 'styled-components';
import { colors } from '../utils/palette';

// Imported Components
import { Text } from '@components/atoms/Text';
import { ListDiv } from './ListHeader';
import Flex from '@components/atoms/Flex';
import MyDGText from '../Common/MyDGText';
import MyProfile from '../Common/MyProfile';

import { listDivSize } from '../utils/RankingBoardTexts';

const ListItem = ({ type, data }) => {
  const { rank, studyname, name, leader, team, solved, mvp, isFollow } = data;

  return (
    <ListItemContainer>
      <ListDiv
        width={listDivSize[type][0]}
        children={<BlackBold children={rank} />}
      />
      <ListDiv width={listDivSize[type][1]}>
        {studyname ? (
          <BlackBold children={studyname} />
        ) : (
          <Flex direction="row" justify="left">
            <MyProfile width={23} />
            <RowSpace />
            <BlackBold children={name} />
          </Flex>
        )}
      </ListDiv>
      <ListDiv width={listDivSize[type][2]}>
        {leader ? (
          <Flex direction="row" justify="left">
            <MyProfile width={23} />
            <RowSpace />
            <MyDGText children={leader} />
          </Flex>
        ) : (
          <MyDGText children={team} />
        )}
      </ListDiv>
      <ListDiv
        width={listDivSize[type][3]}
        children={<MyDGText children={solved} />}
      />
      <ListDiv width={listDivSize[type][4]}>
        {mvp ? (
          <MyDGText children={mvp} />
        ) : isFollow ? (
          <MyDGText children="팔로우 취소" />
        ) : (
          <RedUnderlined children="팔로우" />
        )}
      </ListDiv>
    </ListItemContainer>
  );
};

const ListItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 10px;
  border-radius: 5px;
  padding: 3px 5px;
  width: 100%;
  height: 40px;

  text-align: left;
  list-style: none;
  background-color: ${colors.themeWhite};
`;

const BlackBold = styled(Text)`
  display: inline-block;
  font:
    bold 15px 'Noto Sans KR',
    sans-serif;
`;

// 적용이 안됨 ㅠㅠ..
// const RedUnderlined = styled(MyDGText)`
//   text-decoration: underline;
//   color: ${colors.themeRed};
// `;

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

export default ListItem;
