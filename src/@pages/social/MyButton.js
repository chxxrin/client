import { styled } from 'styled-components';
import { colors } from './utils/palette';

const MyButton = ({
  width = '0',
  height = '0',
  color = colors.themeBG,
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
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ color }) => color};
  cursor: pointer;
  letter-spacing: 1px;
`;

export default MyButton;
