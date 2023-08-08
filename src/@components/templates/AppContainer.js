import React from 'react';
import { styled } from 'styled-components';

const AppContainer = ({ children }) => {
  return <StyledApp>{children}</StyledApp>;
};

const StyledApp = styled.div`
  max-width: 1920px;
  background: linear-gradient(
    180deg,
    #222831 26.04%,
    #34475e 68.75%,
    #466589 100%
  );
`;

export default AppContainer;
