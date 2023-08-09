import { styled } from 'styled-components';

// Imported Components
import { Text } from 'src/@components/atoms/Text';
import { Space } from 'src/@components/atoms/Space';
import MyDGText from '../Common/MyDGText';

const CardTextBlock = ({ align, topText, botColor, botText }) => {
  return (
    <CardTextBlockContainer align={align}>
      <MyDGText>{topText}</MyDGText>
      <Space height="5px" />
      <ContentText color={botColor} children={botText} />
    </CardTextBlockContainer>
  );
};

const CardTextBlockContainer = styled.div`
  width: fit-content;

  text-align: ${(align) => align};
`;

const ContentText = styled(Text)`
  display: inline-block;
  font:
    bold 18px 'Noto Sans KR',
    sans-serif;
  color: ${(botColor) => botColor};
`;

export default CardTextBlock;
