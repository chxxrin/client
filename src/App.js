import Router from './Router';
import GlobalStyle from './@style/GlobalStyle';
import './@style/font.css';
import AppContainer from './@components/templates/AppContainer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Router />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
