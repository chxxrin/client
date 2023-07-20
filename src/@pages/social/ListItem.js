import { styled } from 'styled-components';
import { Text } from 'src/@components/atoms/Text';
import { colors } from './utils/palette';

const ListItem = ({ rank, name, team, solved, last }) => {
  return (
    <ListItemContainer>
      <Text>{rank}</Text>
      <Text>{name}</Text>
      <Text>{team}</Text>
      <Text>{solved}</Text>
      <Text>{last}</Text>
    </ListItemContainer>
  );
};

const ListItemContainer = styled.li`
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 3px 5px;
  width: 495px;
  height: 40px;

  list-style: none;
  background-color: ${colors.themeBG};
`;

export default ListItem;
