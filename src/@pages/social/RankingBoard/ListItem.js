import { styled } from 'styled-components';

// Imported Components
import { Text } from 'src/@components/atoms/Text';
import { colors } from '../utils/palette';
import { ListDiv } from './RankingBoard';
import MyDGText from '../Common/MyDGText';

import { listDivSize } from '../utils/Texts';
const keys = ['rank', 'name', 'team', 'solved', 'last'];

const ListItem = (props) => {
  return (
    <ListItemContainer>
      {keys.map((k, i) => {
        return (
          <ListDiv key={i} width={listDivSize[i]}>
            {i === 0 || i === 1 ? (
              <Text size={18} weight="bold">
                {props[keys[i]]}
              </Text>
            ) : (
              <MyDGText>{props[keys[i]]}</MyDGText>
            )}
          </ListDiv>
        );
      })}
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
  background-color: ${colors.themeBG};
`;

export default ListItem;
