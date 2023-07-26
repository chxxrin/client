import { styled } from 'styled-components';

// Imported Components
import { Text } from 'src/@components/atoms/Text';
import { colors } from '../utils/palette';
import { ListDiv } from './RankingBoard';
import MyDGText from '../Common/MyDGText';

import { listDivSize } from '../utils/Texts';
import MyProfile from '../Common/MyProfile';

const ListItem = (props) => {
  const keys = Object.keys(props);
  return (
    <ListItemContainer>
      {keys.map((k, i) => {
        if (i === 0) {
          return (
            <Text size={18} weight="bold">
              {props[keys[i]]}
            </Text>
          );
        } else if (i === 1) {
          return (
            <Text size={18} weight="bold">
              <MyProfile width={23} />
              {props[keys[i]]}
            </Text>
          );
        } else {
          return <MyDGText>{props[keys[i]]}</MyDGText>;
        }
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
