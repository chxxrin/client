import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset};
    body {
        font-family : "Pretendard-Regular";
    }
`

export default GlobalStyle
