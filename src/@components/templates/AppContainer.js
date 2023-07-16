import React from 'react';
import { styled } from 'styled-components';

const AppContainer = ({ children }) => {
  return <StyledApp>{children}</StyledApp>;
};

const StyledApp = styled.div`
  max-width: 1920px;
`;

export default AppContainer;
