import { styled } from 'styled-components';

const Button = ({
  paddingX = '0',
  paddingY = '0',
  color = 'D9D9D9',
  children,
}) => {
  return (
    <StyledButton paddingX={paddingX} paddingY={paddingY} color={color}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: ${({ paddingY }) => paddingY}px ${({ paddingX }) => paddingX}px;
  background-color: #${({ color }) => color};
  cursor: pointer;
  letter-spacing: 1px;
`;

export default Button;
