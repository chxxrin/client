import { styled } from 'styled-components';
import { colors } from '../utils/palette';

const MyButton = ({
  width = '100%',
  height = 'auto',
  color = colors.themeGray,
  children,
}) => {
  return (
    <StyledButton width={width} height={height} color={color}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 8px 0;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ color }) => color};
  cursor: pointer;
  letter-spacing: 1px;
`;

export default MyButton;
