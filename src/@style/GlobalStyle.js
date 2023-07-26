import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    body {
        font-family : "Pretendard-Regular";
    }
    body * {
        box-sizing : border-box;
    }
`;

export default GlobalStyle;
