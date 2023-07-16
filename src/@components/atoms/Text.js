import styled from 'styled-components';

export const Text = ({
  size = 1,
  weight = 500,
  color = 'black',
  children,
  variant,
  as = 'span',
  spacing = '-0px',
  font = 'Pretendard-Regular',
  cursor = 'auto',
  underline = false,
  lineHeight = '120%',
  shadow = false,
  white = false,
  blue = false,
  ...rest
}) => {
  return (
    <StyledText
      size={size}
      weight={weight}
      color={color}
      variant={variant}
      as={as}
      spacing={spacing}
      font={font}
      cursor={cursor}
      underline={underline}
      lineHeight={lineHeight}
      shadow={shadow}
      white={white}
      blue={blue}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.span`
  word-wrap: break-word;
  word-break: keep-all;
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  letter-spacing: ${({ spacing }) => spacing};
  line-height: ${({ lineHeight }) => lineHeight};
  font-family: ${({ font }) => font};
  cursor: ${({ cursor }) => cursor};
`;
