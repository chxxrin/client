import { styled } from 'styled-components';

// Imported Components
import { Text } from 'src/@components/atoms/Text';
import { Space } from 'src/@components/atoms/Space';
import { Flex } from 'src/@components/atoms/Flex';
import MyDGText from '../Common/MyDGText';
import MyProfile from '../Common/MyProfile';

const CardName = ({ data }) => {
  const { rank, grade, name, image } = data;

  return (
    <Flex direction="row" justify="left">
      {image ? (
        <>
          <MyProfile width={54} />
          <RowSpace />
        </>
      ) : null}
      <CardNameText>
        {grade ? (
          <MyDGText children={`${rank}위 | ${grade}`} />
        ) : (
          <MyDGText children={`${rank}위`} />
        )}
        <Space height="5px" />
        <Name children={name} />
      </CardNameText>
    </Flex>
  );
};

const CardNameText = styled.div`
  text-align: left;
`;

const Name = styled(Text)`
  display: inline-block;
  font:
    bold 18px 'Noto Sans KR',
    sans-serif;
`;

const RowSpace = styled.div`
  width: 10px;
`;

export default CardName;
